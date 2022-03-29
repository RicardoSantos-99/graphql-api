import axios from 'axios';

export const context = () => {
	return {
		getUsers: async (path = '/') => {
			const url = `http://localhost:4003/graphql${path}`;
			const { data } = await axios.get(url);
			return data;
		},
	};
};
