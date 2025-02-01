import { ITableProps } from '../../model/TableModel';
import styles from './Table.module.scss';

export const Table = ({}: ITableProps) => {
	return <div className={styles['table-container']}>Table</div>;
};
