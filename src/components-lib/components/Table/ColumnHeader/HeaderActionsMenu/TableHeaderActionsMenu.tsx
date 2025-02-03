import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ITableHeaderMenuProps } from '../../../../model/TableModel';
import styles from './TableHeaderActionsMenu.module.scss';

export const TableHeaderActionsMenu: React.FC<ITableHeaderMenuProps> = ({
	children,
	isOpen,
	onToggle,
}) => {
	const [isHidden, setIsHidden] = useState<boolean>(isOpen);

	useEffect(() => {
		if (!isOpen) {
			setTimeout(() => setIsHidden(isOpen), 300);
		} else {
			setIsHidden(isOpen);
		}
	}, [isOpen]);

	return (
		<div
			className={clsx(styles.container, {
				[styles.open]: isOpen,
			})}
		>
			<i
				onClick={onToggle}
				className={clsx('material-symbols-outlined', styles.button)}
			>
				more_horiz
			</i>
			{isHidden && <div className={clsx(styles.menu)}>{children}</div>}
		</div>
	);
};
