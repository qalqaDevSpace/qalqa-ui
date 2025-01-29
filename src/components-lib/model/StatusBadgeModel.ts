export interface IBaseStatusBadgeProps {
    label: string;
    type?: 'default' | 'selected';
    status: 'toDo' | 'inProgress' | 'done' | 'cancelled' | 'archived' | 'waitingReview';
}
