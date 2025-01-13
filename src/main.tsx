import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastProvider } from './components-lib/index.ts';
import App from './App/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</StrictMode>
);
