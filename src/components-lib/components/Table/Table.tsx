import React, { useEffect, useState } from 'react';
import { Data, ITableProps } from '../../model/TableModel';
import { TableSort } from './Sort/TableSort';
import styles from './Table.module.scss';

interface ActiveSort {
	accessor: string;
	order: 'asc' | 'desc';
}

export const Table: React.FC<ITableProps> = ({ columns, data }) => {
	const [sortedData, setSortedData] = useState<Data[]>([]);
	const [activeSort, setActiveSort] = useState<ActiveSort | null>(null);

	useEffect(() => {
		setSortedData(data);
		setActiveSort(null);
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

	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead className={styles['table-head']}>
					<tr className={styles['table-row']}>
						{columns.map((col, index) => {
							const isActive =
								activeSort !== null && activeSort.accessor === col.accessor;
							const sortOrder = isActive ? activeSort!.order : 'asc';
							return (
								<th key={index} className={styles['table-headline']}>
									<p className={styles.title}>
										{col.header}
										<TableSort
											onSort={() => handleSort(col.accessor)}
											active={isActive}
											order={sortOrder}
										/>
									</p>
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{sortedData.map((row, rowIndex) => (
						<tr className={styles['table-row']} key={rowIndex}>
							{columns.map((col, colIndex) => (
								<td key={colIndex} className={styles['table-cell']}>
									{row[col.accessor]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
