import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const context = () => {
	return {
		getUsers: async (path = '/') => {
			const url = apiUrl + '/users' + path;
			const { data } = await axios.get(url);
			return data;
		},

		getPosts: async (path = '/') => {
			const url = apiUrl + '/posts' + path;
			const { data } = await axios.get(url);
			return data;
		},
	};
};
