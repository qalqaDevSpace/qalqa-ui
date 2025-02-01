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
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

	const [theme, setTheme] = useState<Theme | string>(
		mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT
	);
	const mediaThemePreload = () => {
		if (isCustomTheme && customThemeNameDark && customThemeNameLight) {
			mediaQuery.addEventListener('change', (e) => {
				setTheme(e.matches ? customThemeNameDark : customThemeNameLight);
			});
		} else {
			mediaQuery.addEventListener('change', (e) => {
				setTheme(e.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT);
			});
		}
	};

	const localThemePreload = (localTheme: string) => {
		setTheme(localTheme);
	};

	const toggleTheme = () => {
		if (theme === ThemeEnum.DARK) {
			setTheme(ThemeEnum.LIGHT);
			localStorage.setItem('q-ui-theme', ThemeEnum.LIGHT);
		} else {
			setTheme(ThemeEnum.DARK);
			localStorage.setItem('q-ui-theme', ThemeEnum.DARK);
		}
	};

	const localTheme = localStorage.getItem('q-ui-theme');

	useEffect(() => {
		loadTheme(theme);
	}, [mediaQuery, theme]);

	useEffect(() => {
		if (!localTheme) {
			mediaThemePreload();
			return;
		}
		localThemePreload(localTheme);
	});

	if (!isTheming) {
		loadDefaultColors();
		return <>{children}</>;
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
