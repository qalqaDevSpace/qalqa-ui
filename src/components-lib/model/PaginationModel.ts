export interface IPaginationProps {
	currentPage: number;
	totalPages: number;
	maxPages?: number;
	onPageChange: (page: number) => void;
}
