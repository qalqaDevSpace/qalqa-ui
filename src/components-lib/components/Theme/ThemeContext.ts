import { createContext, useContext } from 'react';
import { ThemeContextProps } from '../../model/ThemeModel';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined
);

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
