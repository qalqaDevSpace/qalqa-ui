import { ThemeEnum } from '../../model/ThemeModel';
import { useTheme } from '../Theme/ThemeContext';
import styles from './ThemeButton.module.scss';

const ThemeButton = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={styles.button} onClick={() => toggleTheme()}>
			<i className={'material-symbols-outlined ' + styles.icon}>
				{theme === ThemeEnum.DARK ? 'dark_mode' : 'wb_sunny'}
			</i>
		</div>
	);
};

export default ThemeButton;
