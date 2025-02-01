export type Theme = ThemeEnum.DARK | ThemeEnum.LIGHT; //TODO: В дальнейшем нужно будет предусмотреть, что тут могут быть произвольные пользовательские темы, меняемые по ключу.

export enum ThemeEnum {
	DARK = 'dark',
	LIGHT = 'light',
}

export interface IThemeContextProps {
	theme: Theme | string;
	toggleTheme: () => void;
}

interface IThemeProviderBaseProps {
	children: React.ReactNode;
}

export type ThemeProviderPropsWithTheming = IThemeProviderBaseProps & {
	isTheming: true;
	isCustomTheme?: boolean;
};

export type ThemeProviderPropsWithoutTheming = IThemeProviderBaseProps & {
	isTheming?: false;
	isCustomTheme?: never;
};

interface ThemeProviderPropsWithCustomTheme extends IThemeProviderBaseProps {
	isCustomTheme?: true;
	customThemeNameDark: string;
	customThemeNameLight: string;
}

interface ThemeProviderPropsWithoutCustomTheme extends IThemeProviderBaseProps {
	isCustomTheme?: false;
	customThemeNameDark?: never;
	customThemeNameLight?: never;
}

export type ThemeProviderProps = (
	| ThemeProviderPropsWithTheming
	| ThemeProviderPropsWithoutTheming
) &
	(ThemeProviderPropsWithCustomTheme | ThemeProviderPropsWithoutCustomTheme);
