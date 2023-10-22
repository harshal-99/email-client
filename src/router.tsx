import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { EmailLayout } from './routes/EmailLayout.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		loader: () => {
			return redirect('./email');
		},
		element: (
			<Provider store={store}>
				<App />
			</Provider>
		),
	},
	{
		path: '/email',
		element: <EmailLayout />,
	},
]);
