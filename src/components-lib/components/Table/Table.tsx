import { ITableProps } from '../../model/TableModel';
import styles from './Table.module.scss';

export const Table: React.FC<ITableProps> = ({ columns, data }) => {
	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead className={styles['table-head']}>
					<tr className={styles['table-row']}>
						{columns.map((col, index) => (
							<th key={index} className={styles['table-headline']}>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
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
