import React, { createContext, useContext, useState } from "react";
import Toast from "../Toast/Toast";
import { IToastProps, ToastPosition } from "../../model/ToastModel";
import styles from "./ToastProvider.module.scss";
import clsx from "clsx";

interface ToastContextProps {
  addToast: (toast: Omit<IToastProps, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<IToastProps[]>([]);
  const [position, setPosition] = useState<ToastPosition>("top-right");

  const addToast = (toast: Omit<IToastProps, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    if (toast.position) {
      setPosition(toast.position);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className={clsx(styles["toast-container"], styles[position])}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default ToastProvider;
