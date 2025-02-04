import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { IClear } from '../../../../../model/TableModel';
import styles from './TableClear.module.scss';

export const TableClear: React.FC<IClear> = ({ isShown, onClear }) => {
	const [isOpen, setIsOpen] = useState<boolean>(isShown);

	useEffect(() => {
		if (!isShown) {
			setTimeout(() => setIsOpen(isShown), 300);
		} else {
			setIsOpen(isShown);
		}
	}, [isShown]);

	return (
		<>
			{isOpen && (
				<div
					className={clsx(styles['sort-container'], {
						[styles.open]: isShown,
					})}
					onClick={onClear}
				>
					<p className={styles.title}>Clear</p>
					<i className={clsx('material-symbols-outlined', styles.arrow)}>
						backspace
					</i>
				</div>
			)}
		</>
	);
};
