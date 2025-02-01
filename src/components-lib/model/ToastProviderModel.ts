import { IToastProps } from './ToastModel';

export interface IToastContextProps {
	addToast: (toast: Omit<IToastProps, 'id'>) => void;
	removeToast: (id: string) => void;
}
