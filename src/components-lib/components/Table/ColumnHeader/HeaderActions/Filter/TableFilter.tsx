import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ITableFilterProps } from '../../../../../model/TableModel';
import styles from './TableFilter.module.scss';

export const TableFilter = ({ active, onFilter }: ITableFilterProps) => {
	const [delayedActive, setDelayedActive] = useState(active);
	useEffect(() => {
		setTimeout(() => {
			setDelayedActive(active);
		}, 200);
	}, [active]);
	return (
		<div onClick={onFilter} className={styles['filter-container']}>
			<p className={styles['filter-title']}>Filter</p>
			<i
				className={clsx('material-symbols-outlined', styles['filter-icon'], {
					[styles.active]: active,
					[styles['active-animation']]: delayedActive,
				})}
			>
				{active ? 'filter_alt' : 'filter_alt_off'}
			</i>
		</div>
	);
};
