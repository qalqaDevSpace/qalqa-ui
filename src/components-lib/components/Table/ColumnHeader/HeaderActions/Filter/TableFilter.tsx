import clsx from 'clsx';
import styles from './TableFilter.module.scss';

export const TableFilter = () => {
	return (
		<div className={styles['filter-container']}>
			<p className={styles['filter-title']}>Filter</p>
			<i className={clsx('material-symbols-outlined', styles['filter-icon'])}>
				filter_alt
			</i>
		</div>
	);
};
