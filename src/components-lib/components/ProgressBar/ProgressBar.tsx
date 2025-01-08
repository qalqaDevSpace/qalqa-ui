import React, { useState, useEffect } from "react";
import { ToastType } from "../../model/ToastModel";
import styles from "./ProgressBar.module.scss";
import clsx from "clsx";

type ProgressBarProps = {
  duration: number;
  type: ToastType;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  duration,
  type,
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (duration > 0) {
      const step = 100 / ((duration - 0.5) * 10);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - step;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={styles.progressbar}>
      <div
        style={{ width: `${progress}%` }}
        className={clsx(styles.progress, styles[`t-${type}`])}
      />
    </div>
  );
};

export default ProgressBar;
