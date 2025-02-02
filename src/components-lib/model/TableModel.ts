export interface ITableProps {
	columns: Column[];
	data: Data[];
}

export type Data = Record<string, React.ReactNode>;

export interface Column {
	header: string;
	accessor: string;
}
