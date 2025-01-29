import { ThemeEnum } from '../../model/ThemeModel';
import { useTheme } from '../Theme/ThemeContext';

const ThemeButton = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div onClick={() => toggleTheme()}>
			<i className="material-symbols-outlined">
				{theme === ThemeEnum.DARK ? 'dark_mode' : 'wb_sunny'}
			</i>
		</div>
	);
};

export default ThemeButton;
