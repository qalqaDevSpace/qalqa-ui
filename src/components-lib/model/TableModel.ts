export interface ITableProps {
	columns: Column[];
	data: Data[];
	sortable?: boolean;
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
	type?: ColumnType;
	isSortable?: boolean;
}

export interface ITableColumnHeaderComponentProps {
	header: Column['header'];
	type?: Column['type'];
	isSortable?: Column['isSortable'];
	isActive: boolean;
	sortOrder: Order;
	onSort?: () => void;
}

type ColumnType =
	| 'default'
	| 'numeric'
	| 'boolean'
	| 'date'
	| 'time'
	| 'actions';

type Order = 'asc' | 'desc';

export type Data = Record<string, React.ReactNode>;
