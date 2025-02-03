import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ITableSortProps } from '../../../../../model/TableModel';
import styles from './TableSort.module.scss';

export const TableSort: React.FC<ITableSortProps> = ({
	active,
	order,
	onSort,
}) => {
	const [delayedActive, setDelayedActive] = useState(active);
	useEffect(() => {
		setTimeout(() => {
			setDelayedActive(active);
		}, 200);
	}, [active]);
	return (
		<div className={styles['sort-container']} onClick={onSort}>
			<p className={styles.title}>Sort</p>
			<i
				className={clsx('material-symbols-outlined', styles.arrow, {
					[styles.active]: active,
					[styles['active-animation']]: delayedActive,
					[styles[`order-desc`]]: order === 'desc',
				})}
			>
				{active ? 'keyboard_arrow_down' : 'unfold_more'}
			</i>
		</div>
	);
};
