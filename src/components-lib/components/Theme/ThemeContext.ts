import { createContext, useContext } from 'react';
import { IThemeContextProps } from '../../model/ThemeModel';

export const ThemeContext = createContext<IThemeContextProps | undefined>(
	undefined
);

export const useTheme = (): IThemeContextProps => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
