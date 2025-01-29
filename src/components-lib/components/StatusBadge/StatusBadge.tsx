import { IBaseStatusBadgeProps } from "../../model/StatusBadge";
import clsx from "clsx";
import styles from "./StatusBadge.module.scss";

export const StatusBadge = ({
    label,
    color,
    type,
    status,
}: IBaseStatusBadgeProps) => {
    const StatusBadgeClasses = clsx(
        styles.badge,
        styles[`t-${type}`],
        styles[`s-${status}`]
    )
    return (
        <div
            className={StatusBadgeClasses}
        >
            {label}
        </div>
        );
};