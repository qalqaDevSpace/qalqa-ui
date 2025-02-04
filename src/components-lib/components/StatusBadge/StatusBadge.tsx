import { IBaseStatusBadgeProps } from "../../model/StatusBadgeModel";
import clsx from "clsx";
import styles from "./StatusBadge.module.scss";

export const StatusBadge = ({
    label,
    type,
    status,
}: IBaseStatusBadgeProps) => {
    const StatusBadgeClasses = clsx(
        styles.badge,
        styles[`t-${type}`],
        styles[`s-${status}`]
    );
    return (
        <div
            className={StatusBadgeClasses}
        >
            <p>{label}</p>
        </div>
        );
};