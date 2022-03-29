const users = async (_, __, { axios }) => {
	const { data } = await axios.get('http://localhost:3000/users');
	return data;
};

const user = async (_, { id }, { axios }) => {
	const { data } = await axios.get('http://localhost:3000/users/' + id);
	return data;
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
