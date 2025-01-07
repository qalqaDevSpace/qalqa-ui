import React from "react";
import { ButtonProps } from "../../model/ButtonModel";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
