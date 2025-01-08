import clsx from "clsx";
import { useEffect, useState } from "react";
import { IToastProps, ToastType } from "../../model/ToastModel";
import styles from "./Toast.module.scss";
import ProgressBar from "../ProgressBar/ProgressBar";

const Toast = ({
  type = "info",
  message,
  duration,
  position = "top-right",
  onClose,
}: IToastProps & { onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const trueDuration = duration ? duration : 3;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, trueDuration * 1000);

    return () => clearTimeout(timeout);
  }, [trueDuration]);

  useEffect(() => {
    if (!isVisible) {
      const removeTimeout = setTimeout(onClose, 300);
      return () => clearTimeout(removeTimeout);
    }
  }, [isVisible, onClose]);

  const toastClasses = clsx(
    styles.toast,
    styles[`t-${type}`],
    styles[`p-${position}`],
    { [styles.visible]: isVisible }
  );

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return "check_circle";
      case "error":
        return "error";
      case "warning":
        return "warning";
      case "info":
        return "info";
      default:
        return "info";
    }
  };

  return (
    <div className={toastClasses}>
      <i className={`material-icons ` + styles.icon}>{getIcon(type)}</i>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {type.slice(0, 1).toUpperCase() + type.slice(1)}
        </h3>
        <p className={styles.text}>{message ? message : "No message"}</p>
        <ProgressBar duration={trueDuration} type={type} />
      </div>
    </div>
  );
};

export default Toast;