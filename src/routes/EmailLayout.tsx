import { EmailFilter, EmailCardList } from '../components';
import { useEffect } from 'react';
import { emailList } from '../services';

export const EmailLayout = () => {
	useEffect(() => {
		const controller = new AbortController();
		emailList(1, controller.signal).then((res) => {
			console.log(res);
		});
		return () => controller.abort('component unmounted');
	}, []);

	return (
		<div className="p-8">
			Email Layout
			<EmailFilter />
			<EmailCardList />
		</div>
	);
};
