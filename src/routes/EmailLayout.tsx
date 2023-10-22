import { EmailFilter, EmailCardList } from '../components';

export const EmailLayout = () => {
	return (
		<div className="p-8">
			Email Layout
			<EmailFilter />
			<EmailCardList />
		</div>
	);
};
