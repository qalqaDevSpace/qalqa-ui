import clsx from "clsx";
import { LabelBoxProps } from "../../model/LabelBoxModel";
import styles from "./LabelBox.module.scss";
import { useEffect, useState } from "react";

const LabelBox: React.FC<LabelBoxProps> = ({
  children,
  variants = "basic",
  label,
  position = "left",
  disableFocusActions = false,
  simulateFocus,
}: LabelBoxProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  useEffect(() => {
    simulateFocus !== undefined ? setFocus(simulateFocus) : null;
  }, [simulateFocus]);

  return (
    <div
      className={clsx(styles.box, {
        [styles.focus]: focus,
        [styles.on]: variants === "on",
        [styles.left]: position === "left",
        [styles.center]: position === "center",
        [styles.right]: position === "right",
      })}
    >
      <label htmlFor="children" className={clsx(styles.label)}>
        {label}
      </label>

      {disableFocusActions ? (
        <div id="children" className={styles.children}>
          {children}
        </div>
      ) : (
        <div
          id="children"
          className={styles.children}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default LabelBox;
