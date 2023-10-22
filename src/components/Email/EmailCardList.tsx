import { useMemo } from 'react';
import { EmailCard } from './EmailCard.tsx';

export const EmailCardList = () => {
	const emails = useMemo(() => {
		const arr = new Array(10);
		return arr.fill(0).map((_, i) => ({
			id: i,
			subject: `Email ${i}`,
		}));
	}, []);
	return (
		<div>
			{emails.map((email) => (
				<EmailCard key={email.id} />
			))}
		</div>
	);
};
