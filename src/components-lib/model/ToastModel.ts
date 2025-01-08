export interface IToastProps {
    id: string;
    type: ToastType;
    message?: string;
    duration?: number;
    position?: ToastPosition;
    stayAlive?: boolean;
    headless?: boolean;
}

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
