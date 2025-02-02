import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ITableSortProps } from '../../../model/TableModel';
import styles from './TableSort.module.scss';

export const TableSort: React.FC<ITableSortProps> = ({ active, order }) => {
	const [delayedActive, setDelayedActive] = useState(active);
	useEffect(() => {
		setTimeout(() => {
			setDelayedActive(active);
		}, 200);
	}, [active]);
	return (
		<i
			className={clsx('material-symbols-outlined', styles.arrow, {
				[styles.active]: active,
				[styles['active-animation']]: delayedActive,
				[styles[`order-desc`]]: order === 'desc',
			})}
		>
			{active ? 'keyboard_arrow_down' : 'unfold_more'}
		</i>
	);
};
