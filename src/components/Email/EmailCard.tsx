import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectEmailById } from '../../reducers';

type EmailCardProps = {
	id: string;
};

export const EmailCard: FC<EmailCardProps> = ({ id }) => {
	const email = useAppSelector((state) => selectEmailById(state, id));

	return (
		<div>
			Email Card {id} {email.subject}
		</div>
	);
};
