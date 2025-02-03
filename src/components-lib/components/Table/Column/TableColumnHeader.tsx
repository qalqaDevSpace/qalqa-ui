import clsx from 'clsx';
import { ITableColumnHeaderComponentProps } from '../../../model/TableModel';
import { TableSort } from '../Sort/TableSort';
import styles from './TableColumnHeader.module.scss';

export const TableColumnHeader = ({
	header,
	isActive,
	sortOrder,
	isSortable,
	type = 'default',
	onSort,
}: ITableColumnHeaderComponentProps) => {
	return (
		<>
			{type === 'default' && (
				<th
					onClick={onSort}
					className={clsx(styles['table-headline'], {
						[styles.sortable]: isSortable,
					})}
				>
					<p className={styles.title}>
						{header}

						{isSortable && <TableSort active={isActive} order={sortOrder} />}
					</p>
				</th>
			)}
		</>
	);
};
