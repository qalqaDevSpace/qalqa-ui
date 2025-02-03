import clsx from 'clsx';
import { useState } from 'react';
import { ITableColumnHeaderComponentProps } from '../../../model/TableModel';
import { TableFilter } from './HeaderActions/Filter/TableFilter';
import { TableSort } from './HeaderActions/Sort/TableSort';
import { TableHeaderActionsMenu } from './HeaderActionsMenu/TableHeaderActionsMenu';
import styles from './TableColumnHeader.module.scss';

export const TableColumnHeader = ({
	header,
	isActive,
	sortOrder,
	isSortable,
	isFiltrable,
	type = 'default',
	onSort,
}: ITableColumnHeaderComponentProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<>
			{type === 'default' && (
				<th
					className={clsx(styles['table-headline'], {
						[styles.sortable]: isSortable,
					})}
				>
					<div className={styles['table-headline-container']}>
						<p className={styles.title}>{header}</p>
						<TableHeaderActionsMenu
							isOpen={isMenuOpen}
							onToggle={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isSortable && (
								<TableSort
									active={isActive}
									order={sortOrder}
									onSort={onSort}
								/>
							)}
							{isFiltrable && <TableFilter />}
						</TableHeaderActionsMenu>
					</div>
				</th>
			)}
		</>
	);
};
