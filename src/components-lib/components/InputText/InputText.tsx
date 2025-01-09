import { useState } from "react";
import { InputProps } from "../../model/InputModel";
import generateId from "../../utils/generateIDs";
import LabelBox from "../LabelBox/LabelBox";
import styles from "./InputText.module.scss";

const InputText = ({
  id,
  label,
  labelText,
  labelVariant,
  placeholder,
  icon,
  iconAction,
  onInput,
}: InputProps) => {
  const checkedId = id ? id : generateId();
  const [input, setInput] = useState<string>();
  const [focus, setFocus] = useState<boolean>(false);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    onInput!(event.currentTarget.value);
    return setInput(event.currentTarget.value);
  };

  return (
    <div className={styles.box}>
      {label ? (
        <LabelBox
          id={checkedId}
          label={labelText}
          variants={labelVariant}
          disableFocusActions
          simulateFocus={focus}
        >
          <div className={styles.input}>
            <input
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(input ? true : false)}
              className={styles.default}
              type="text"
              onInput={handleInput}
            />
            {icon && (
              <i
                onClick={iconAction}
                className={`material-symbols-outlined ` + styles.icon}
              >
                {icon}
              </i>
            )}
          </div>
        </LabelBox>
      ) : (
        <div className={styles.input}>
          <input
            className={styles.default}
            placeholder={placeholder}
            type="text"
          />
          {icon && (
            <i
              onClick={iconAction}
              className={`material-symbols-outlined ` + styles.icon}
            >
              {icon}
            </i>
          )}
        </div>
      )}
    </div>
  );
};

export default InputText;
