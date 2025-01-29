export interface IBaseStatusBadgeProps {
    label: string;
    color?: string;
    type?: 'default' | 'selected';
    status: 'ToDo' | 'In Progress' | 'Done' | 'Cancelled' | 'Archived' | 'Waiting review';
}
