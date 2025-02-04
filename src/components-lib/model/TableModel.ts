export interface ITableProps {
	columns: IColumn[];
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
	onSort?: () => void;
}

export interface IActiveFilter {
	accessor: string;
	rule: unknown;
}

export interface ITableFilterProps {
	active: boolean;
	onFilter?: () => void;
}

export interface IClear {
	isShown: boolean;
	onClear?: () => void;
}

export interface IColumn {
	header: string;
	accessor: string;
	type?: ColumnType;
	isSortable?: boolean;
	isFiltrable?: boolean;
}

export interface ITableColumnHeaderComponentProps {
	header: IColumn['header'];
	type?: IColumn['type'];
	isSortable?: IColumn['isSortable'];
	isActiveSort?: boolean;
	isFiltrable?: boolean;
	isActiveFilter?: boolean;
	sortOrder: Order;
	onSort?: () => void;
	onFilter?: () => void;
	onClear?: () => void;
}

export interface ITableHeaderMenuProps {
	children: React.ReactNode;
	isOpen: boolean;
	onToggle: () => void;
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
