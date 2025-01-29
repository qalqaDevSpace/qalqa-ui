import { useEffect, useState } from 'react';
import { Theme, ThemeEnum, ThemeProviderProps } from '../../model/ThemeModel';
import { loadDefaultColors, loadTheme } from '../../utils/loadTheme';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	isTheming = false,
	isCustomTheme = false,
	customThemeNameDark,
	customThemeNameLight,
}) => {
	if (!isTheming) {
		loadDefaultColors();
		return <>{children}</>;
	}
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

	const [theme, setTheme] = useState<Theme | string>(
		mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT
	);
	if (isCustomTheme && customThemeNameDark && customThemeNameLight) {
		mediaQuery.addEventListener('change', (e) => {
			setTheme(e.matches ? customThemeNameDark : customThemeNameLight);
		});
	} else {
		mediaQuery.addEventListener('change', (e) => {
			setTheme(e.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT);
		});
	}

	useEffect(() => {
		loadTheme(theme);
	}, [mediaQuery]);

	const toggleTheme = (theme: Theme) => {
		setTheme(theme);
		loadTheme(theme);
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
};
