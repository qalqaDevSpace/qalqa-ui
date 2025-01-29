export type Theme = ThemeEnum.DARK | ThemeEnum.LIGHT; //TODO: В дальнейшем нужно будет предусмотреть, что тут могут быть произвольные пользовательские темы, меняемые по ключу.

export enum ThemeEnum {
	DARK = 'dark',
	LIGHT = 'light',
}

export interface ThemeContextProps {
	theme: Theme | string;
	toggleTheme: () => void;
}

interface ThemeProviderBaseProps {
	children: React.ReactNode;
}

export type ThemeProviderPropsWithTheming = ThemeProviderBaseProps & {
	isTheming: true;
	isCustomTheme?: boolean;
};

export type ThemeProviderPropsWithoutTheming = ThemeProviderBaseProps & {
	isTheming?: false;
	isCustomTheme?: never;
};

interface ThemeProviderPropsWithCustomTheme extends ThemeProviderBaseProps {
	isCustomTheme?: true;
	customThemeNameDark: string;
	customThemeNameLight: string;
}

interface ThemeProviderPropsWithoutCustomTheme extends ThemeProviderBaseProps {
	isCustomTheme?: false;
	customThemeNameDark?: never;
	customThemeNameLight?: never;
}

export type ThemeProviderProps = (
	| ThemeProviderPropsWithTheming
	| ThemeProviderPropsWithoutTheming
) &
	(ThemeProviderPropsWithCustomTheme | ThemeProviderPropsWithoutCustomTheme);
