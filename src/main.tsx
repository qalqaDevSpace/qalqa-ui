import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './index.css';
import { ToastProvider } from './components-lib/index.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</StrictMode>
);
