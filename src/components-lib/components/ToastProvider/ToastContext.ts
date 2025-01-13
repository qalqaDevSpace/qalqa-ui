import { createContext, useContext } from 'react';
import { IToastProps } from '../../model/ToastModel';

interface ToastContextProps {
	addToast: (toast: Omit<IToastProps, 'id'>) => void;
	removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
	undefined
);

const useToast = (): ToastContextProps => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};

export default useToast;
