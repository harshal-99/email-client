import axios from 'axios';
import { emailListSchema } from '../../types';

export const emailList = async (page = 1, signal: AbortSignal) => {
	const url = `https://flipkart-email-mock.vercel.app/?page=${page}`;
	const res = await axios.get(url, { signal });
	return emailListSchema.parse(res.data);
};
