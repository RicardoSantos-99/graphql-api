export const getPosts =
	(axios) =>
	async (path = '/') => {
		const apiUrl = process.env.API_URL;
		const url = apiUrl + '/posts' + path;

		try {
			const { data } = await axios.get(url);
			return data;
		} catch (error) {
			return error.response.data;
		}
	};
