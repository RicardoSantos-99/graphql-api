export const getUsers =
	(axios) =>
	async (path = '/') => {
		const apiUrl = process.env.API_URL;

		const url = apiUrl + '/users' + path;
		const { data } = await axios.get(url);
		return data;
	};
