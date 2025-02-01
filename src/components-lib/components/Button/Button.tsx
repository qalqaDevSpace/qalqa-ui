import clsx from 'clsx';
import { KeyboardEvent } from 'react';
import { ButtonProps } from '../../model/ButtonModel';
import styles from './Button.module.scss';

export const Button = ({
	label,
	disabled = false,
	type = 'primary',
	variant,
	size = 'md',
	shadow = false,
	icon,
	link,
	href,
	iconPosition = 'left',
	weight = 'regular',
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
		}
	);

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			onClick ? onClick() : null;
		}
	};

	return (
		<div
			onClick={onClick}
			onKeyDown={handleKeyDown}
			className={buttonClasses}
			tabIndex={0}
		>
			{icon && variant !== 'link' && (
				<i
					className={`material-symbols-outlined ${styles.icon} ${
						iconPosition === 'left' ? styles['icon-left'] : styles['icon-right']
					}`}
				>
					{icon}
				</i>
			)}
			{link && href ? (
				<a className={styles['button-label']} href={href}>
					{label}
				</a>
			) : (
				<a className={styles['button-label']}>{label}</a>
			)}
		</div>
	);
};
