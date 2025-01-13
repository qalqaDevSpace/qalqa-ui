import { IToastProps } from './ToastModel';

export interface ToastContextProps {
	addToast: (toast: Omit<IToastProps, 'id'>) => void;
	removeToast: (id: string) => void;
}
