import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from './TableSort.module.scss';

interface TableSortProps {
	onSort: () => void;
	active: boolean;
	order: 'asc' | 'desc';
}

export const TableSort: React.FC<TableSortProps> = ({
	onSort,
	active,
	order,
}) => {
	const [delayedActive, setDelayedActive] = useState(active);
	useEffect(() => {
		setTimeout(() => {
			setDelayedActive(active);
		}, 200);
	}, [active]);
	return (
		<i
			onClick={onSort}
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
