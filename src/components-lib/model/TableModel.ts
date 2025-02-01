export interface ITableProps {
	columns: Column[];
	data: Record<string, React.ReactNode>[];
}

export interface Column {
	header: string;
	accessor: string;
}
