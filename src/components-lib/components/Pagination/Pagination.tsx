import clsx from 'clsx';
import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const getPages = (): number[] => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		return pages;
	};

	return (
		<div className={styles.pagination}>
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange((currentPage = 1))}
				disabled={currentPage === 1}
			>
				keyboard_double_arrow_left
			</button>
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				keyboard_arrow_left
			</button>
			{getPages().map((page) => (
				<button
					key={page}
					className={clsx(styles.button, {
						[styles.active]: page === currentPage,
					})}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				keyboard_arrow_right
			</button>
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange((currentPage = totalPages))}
				disabled={currentPage === totalPages}
			>
				keyboard_double_arrow_right
			</button>
		</div>
	);
};
