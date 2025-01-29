import clsx from 'clsx';
import { IThemeButtonProps } from '../../model/ThemeButton';
import { ThemeEnum } from '../../model/ThemeModel';
import { useTheme } from '../Theme/ThemeContext';
import styles from './ThemeButton.module.scss';

export const ThemeButton = ({ size = 'md', disabled }: IThemeButtonProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div
			className={clsx(styles.button, styles[`s-${size}`], {
				[styles.disabled]: disabled,
			})}
			onClick={() => toggleTheme()}
		>
			<i className={'material-symbols-outlined ' + styles.icon}>
				{theme === ThemeEnum.DARK ? 'dark_mode' : 'wb_sunny'}
			</i>
		</div>
	);
};
