import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TEmail, TEmailDetail } from '../types';

interface EmailSlice {
	emailIds: string[];
	emails: Record<string, TEmail>;
	emailDetails: Record<string, TEmailDetail>;
	totalEmails?: number;
}
const initialState: EmailSlice = {
	emailIds: [],
	emails: {},
	emailDetails: {},
};
export const emailSlice = createSlice({
	name: 'email',
	initialState,
	reducers: {
		addEmails: (state, action: PayloadAction<TEmail[]>) => {
			action.payload.forEach((email) => {
				const { id } = email;
				if (state.emails[id]) return;
				state.emailIds.push(id);
				state.emails[id] = email;
			});
		},
		updateTotalEmails: (state, action: PayloadAction<number>) => {
			state.totalEmails = action.payload;
		},
	},
});

export const { addEmails, updateTotalEmails } = emailSlice.actions;

export const selectEmailIds = (state: { email: EmailSlice }) =>
	state.email.emailIds;
export const selectEmailById = (state: { email: EmailSlice }, id: string) =>
	state.email.emails[id];

export const shouldFetchMoreEmails = (state: { email: EmailSlice }) => {
	if (state.email.totalEmails === undefined) return true;
	return state.email.emailIds.length < state.email.totalEmails;
};

export default emailSlice.reducer;
