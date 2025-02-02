export interface ITableProps {
	columns: Column[];
	data: Data[];
}

export interface IActiveSort {
	accessor: string;
	order: Order;
}

export interface ITableSortProps {
	active: boolean;
	order: Order;
}

export interface Column {
	header: string;
	accessor: string;
}

type Order = 'asc' | 'desc';

export type Data = Record<string, React.ReactNode>;
