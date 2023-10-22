import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Provider store={store}>
				<App />
			</Provider>
		),
	},
]);
