import clsx from 'clsx';
import { useState } from 'react';
import { ITableColumnHeaderComponentProps } from '../../../model/TableModel';
import { TableClear } from './HeaderActions/Clear/TableClear';
import { TableFilter } from './HeaderActions/Filter/TableFilter';
import { TableSort } from './HeaderActions/Sort/TableSort';
import { TableHeaderActionsMenu } from './HeaderActionsMenu/TableHeaderActionsMenu';
import styles from './TableColumnHeader.module.scss';

export const TableColumnHeader = ({
	header,
	sortOrder,
	isSortable,
	isFiltrable,
	accessor,
	isActiveSort,
	isActiveFilter,
	onSort,
	onFilter,
	onClear,
}: ITableColumnHeaderComponentProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	if (accessor === 'actions')
		return (
			<th className={clsx(styles['table-headline'])}>
				<div className={styles['table-headline-container']}>
					<p className={styles.title}>{header}</p>
				</div>
			</th>
		);

	return (
		<>
			<th
				className={clsx(styles['table-headline'], {
					[styles.sortable]: isSortable,
				})}
			>
				<div
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className={styles['table-headline-container']}
				>
					<p className={styles.title}>{header}</p>
					{(isSortable || isFiltrable) && (
						<TableHeaderActionsMenu isOpen={isMenuOpen}>
							{isSortable && (
								<TableSort
									active={isActiveSort || false}
									order={sortOrder}
									onSort={onSort}
								/>
							)}
							{isFiltrable && (
								<TableFilter
									active={isActiveFilter || false}
									onFilter={onFilter}
								/>
							)}
							<TableClear isShown={isActiveSort || false} onClear={onClear} />
						</TableHeaderActionsMenu>
					)}
				</div>
			</th>
		</>
	);
};
