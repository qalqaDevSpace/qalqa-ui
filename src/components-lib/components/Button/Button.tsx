import { ButtonProps } from "../../model/ButtonModel";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({
  label,
  disabled = false,
  type = "primary",
  variant,
  size = "md",
  shadow = false,
  icon,
  link,
  href,
  iconPosition = "left",
  weight = "regular",
  onClick,
}: ButtonProps) => {
  //FIXME: Добавить более строгую обработку пропсов, чтобы нельзя было в теории запихнуть type в size и т.д.
  const buttonClasses = clsx(
    styles.button,
    styles[`t-${type}`],
    variant && styles[variant],
    styles[`s-${size}`],
    styles[`w-${weight}`],
    {
      [styles.disabled]: disabled,
      [styles.shadow]: shadow,
      [styles["icon-left"]]: icon && iconPosition === "left",
      [styles["icon-right"]]: icon && iconPosition === "right",
    }
  );
  return (
    <div onClick={onClick} className={buttonClasses}>
      {icon ? <i className={`material-icons ` + styles.icon}>{icon}</i> : null}
      {link && href ? (
        <a className={styles["button-label"]} href={href}>
          {label}
        </a>
      ) : (
        <a className={styles["button-label"]}>{label}</a>
      )}
    </div>
  );
};

export default Button;
