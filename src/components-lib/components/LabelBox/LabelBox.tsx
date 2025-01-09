import clsx from "clsx";
import { ILabelBoxProps } from "../../model/LabelBoxModel";
import styles from "./LabelBox.module.scss";
import { useState } from "react";

const LabelBox: React.FC<ILabelBoxProps> = ({
  children,
  variants = "basic",
}: ILabelBoxProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div
      className={clsx(styles.box, {
        [styles.focus]: focus,
        [styles.on]: variants == "on",
      })}
    >
      <label htmlFor="children" className={clsx(styles.label)}>
        Label
      </label>
      <div
        id="children"
        className={styles.children}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default LabelBox;
