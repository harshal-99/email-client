import { useEffect } from 'react';
import { EmailCard } from './EmailCard.tsx';
import { emailList } from '../../services';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addEmails, selectEmailIds, updateTotalEmails } from '../../reducers';

export const EmailCardList = () => {
	const emailIds = useAppSelector(selectEmailIds);
	console.log('emailIds', emailIds);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const controller = new AbortController();
		emailList(1, controller.signal)
			.then((res) => {
				console.log(res);
				dispatch(addEmails(res.list));
				dispatch(updateTotalEmails(res.total));
			})
			.catch((e) => {
				if (e.name !== 'CanceledError') {
					console.error(e);
				}
			});
		return () => controller.abort('component unmounted');
	}, [dispatch]);
	return (
		<div>
			{emailIds.map((email) => (
				<EmailCard key={email} id={email} />
			))}
		</div>
	);
};
