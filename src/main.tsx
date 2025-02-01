import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App.tsx';
import { ThemeProvider, ToastProvider } from './components-lib';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider isTheming>
			<ToastProvider>
				<App />
			</ToastProvider>
		</ThemeProvider>
	</StrictMode>
);
