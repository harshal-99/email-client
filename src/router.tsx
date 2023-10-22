import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App.tsx';
import { EmailLayout } from './routes/EmailLayout.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		loader: () => {
			return redirect('./email');
		},
		element: <App />,
	},
	{
		path: '/email',
		element: <EmailLayout />,
	},
]);
