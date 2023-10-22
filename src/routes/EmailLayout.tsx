import { EmailFilter } from '../components/Email/EmailFilter.tsx';
import { EmailCardList } from '../components/Email/EmailCardList.tsx';

export const EmailLayout = () => {
	return (
		<div className="p-8">
			Email Layout
			<EmailFilter />
			<EmailCardList/>
		</div>
	);
};
