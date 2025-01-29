import { ThemeEnum } from '../model/ThemeModel';

export const loadTheme = (theme: ThemeEnum | string) => {
	const existingLink = document.getElementById(
		'theme-stylesheet'
	) as HTMLLinkElement;

	if (existingLink) {
		existingLink.href = `qt-${theme}-theme.css`;
	} else {
		const link = document.createElement('link');
		link.id = 'theme-stylesheet';
		link.rel = 'stylesheet';
		link.href = `qt-${theme}-theme.css`;
		document.head.appendChild(link);
	}
};

export const loadDefaultColors = async () => {
	await import('../styles/colors.scss');
};
