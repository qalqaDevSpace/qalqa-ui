import clsx from 'clsx';
import React from 'react';
import { IPaginationProps } from '../../model/PaginationModel';
import styles from './Pagination.module.scss';

export const Pagination: React.FC<IPaginationProps> = ({
	currentPage,
	totalPages,
	maxPages = 5,
	onPageChange,
}) => {
	const getDisplayedPages = (): (number | string)[] => {
		if (totalPages <= maxPages) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		} else {
			const pages: (number | string)[] = [];
			pages.push(1);

			let left = Math.max(2, currentPage - 1);
			let right = Math.min(totalPages - 1, currentPage + 1);

			if (currentPage <= 3) {
				left = 2;
				right = 4;
			}
			if (currentPage >= totalPages - 2) {
				left = totalPages - 3;
				right = totalPages - 1;
			}

			if (left > 2) {
				pages.push('ellipsis');
			}
			for (let i = left; i <= right; i++) {
				pages.push(i);
			}
			if (right < totalPages - 1) {
				pages.push('ellipsis');
			}
			pages.push(totalPages);

			return pages;
		}
	};

	const displayedPages = getDisplayedPages();

	return (
		<div className={styles.pagination}>
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange(1)}
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
			{displayedPages.map((page, index) =>
				typeof page === 'string' ? (
					<span key={index} className={styles.ellipsis}>
						...
					</span>
				) : (
					<button
						key={index}
						className={clsx(styles.button, {
							[styles.active]: page === currentPage,
						})}
						onClick={() => onPageChange(page)}
					>
						{page}
					</button>
				)
			)}
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				keyboard_arrow_right
			</button>
			<button
				className={clsx(styles.button, 'material-symbols-outlined')}
				onClick={() => onPageChange(totalPages)}
				disabled={currentPage === totalPages}
			>
				keyboard_double_arrow_right
			</button>
		</div>
	);
};
