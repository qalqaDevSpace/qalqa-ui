import clsx from 'clsx';
import { useEffect, useState } from 'react';
import {
	Data,
	IActiveFilter,
	IActiveSort,
	ITableActions,
	ITableProps,
} from '../../model/TableModel';
import { Button } from '../Button/Button';
import { TableColumnHeader } from './ColumnHeader/TableColumnHeader';
import styles from './Table.module.scss';

export const Table = ({ columns, data, sortable = false }: ITableProps) => {
	const [sortedData, setSortedData] = useState<Data[]>([]);
	const [activeSort, setActiveSort] = useState<IActiveSort | null>(null);
	const [activeFilter, setActiveFilter] = useState<IActiveFilter | null>(null);

	useEffect(() => {
		setSortedData(data);
		setActiveSort(null);
		setActiveFilter(null);
	}, [data]);

	const handleSort = (accessor: string) => {
		let newOrder: 'asc' | 'desc' = 'asc';
		if (activeSort && activeSort.accessor === accessor) {
			newOrder = activeSort.order === 'asc' ? 'desc' : 'asc';
		}
		setActiveSort({ accessor, order: newOrder });

		const sorted = [...sortedData].sort((a, b) => {
			const valA = a[accessor];
			const valB = b[accessor];

			if (valA == null && valB == null) return 0;
			if (valA == null) return newOrder === 'asc' ? -1 : 1;
			if (valB == null) return newOrder === 'asc' ? 1 : -1;

			if (typeof valA === 'string' && typeof valB === 'string') {
				return newOrder === 'asc'
					? valA.localeCompare(valB)
					: valB.localeCompare(valA);
			}

			if (valA < valB) return newOrder === 'asc' ? -1 : 1;
			if (valA > valB) return newOrder === 'asc' ? 1 : -1;
			return 0;
		});

		setSortedData(sorted);
	};

	const handleClearSort = () => {
		setActiveSort(null);
		setSortedData(data);
	};

	const handleFilter = (accessor: string, rule: unknown) => {
		if (activeFilter) {
			setActiveFilter(null);
			return;
		}
		setActiveFilter({ accessor, rule });
	};

	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead className={styles['table-head']}>
					<tr className={styles['table-row']}>
						{columns.map((col, index) => {
							const isActiveSort =
								activeSort !== null && activeSort.accessor === col.accessor;
							const isActiveFilter =
								activeFilter !== null && activeFilter.accessor === col.accessor;
							const sortOrder = isActiveSort ? activeSort!.order : 'asc';
							const isSortable = sortable || col.isSortable;

							return (
								<TableColumnHeader
									key={index}
									header={col.header}
									accessor={col.accessor}
									isSortable={isSortable}
									isFiltrable={col.isFiltrable}
									isActiveSort={isActiveSort}
									isActiveFilter={isActiveFilter}
									sortOrder={sortOrder}
									onSort={() => isSortable && handleSort(col.accessor)}
									onFilter={() =>
										col.isFiltrable && handleFilter(col.accessor, null)
									}
									onClear={handleClearSort}
								/>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{sortedData.map((row, rowIndex) => (
						<tr className={styles['table-row']} key={rowIndex}>
							{columns.map((col, colIndex) => {
								if (col.accessor === 'actions' && row.actions) {
									const actionsField = row.actions as
										| ITableActions
										| ITableActions[];
									const actions = Array.isArray(actionsField)
										? actionsField
										: [actionsField];

									return (
										<td
											key={colIndex}
											className={clsx(styles['table-cell'], styles['actions'])}
										>
											{actions.map(
												(act: ITableActions, actionIndex: number) => (
													<Button
														key={actionIndex}
														size={act.size || 'sm'}
														disabled={act.disabled}
														icon={act.icon}
														iconPosition={act.iconPosition}
														weight={act.weight}
														shadow={act.shadow}
														label={act.label}
														type={act.type}
														onClick={() => act.action(row)}
													/>
												)
											)}
										</td>
									);
								}

								return (
									<td key={colIndex} className={styles['table-cell']}>
										<>{row[col.accessor]}</>
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
