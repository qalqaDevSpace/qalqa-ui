import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { ITableHeaderMenuProps } from '../../../../model/TableModel';
import styles from './TableHeaderActionsMenu.module.scss';

export const TableHeaderActionsMenu: React.FC<ITableHeaderMenuProps> = ({
	children,
	isOpen,
}) => {
	const [isHidden, setIsHidden] = useState<boolean>(isOpen);
	const [animate, setAnimate] = useState<boolean>(false);

	useEffect(() => {
		if (!isOpen) {
			setTimeout(() => setIsHidden(isOpen), 300);
		} else {
			setIsHidden(isOpen);
		}
		setAnimate(true);
		const timer = setTimeout(() => setAnimate(false), 500);
		return () => clearTimeout(timer);
	}, [isOpen]);

	return (
		<div
			className={clsx(styles.container, {
				[styles.open]: isOpen,
			})}
		>
			<i
				className={clsx('material-symbols-outlined', styles.button, {
					[styles.animate]: animate,
				})}
			>
				<div className={styles['button-div']}></div>
				<div className={styles['button-div']}></div>
				<div className={styles['button-div']}></div>
			</i>
			{isHidden && <div className={clsx(styles.menu)}>{children}</div>}
		</div>
	);
};
