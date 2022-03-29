const users = async (_, __, { axios }) => {
	const { data } = await axios.get('http://localhost:3000/users');
	return data;
};

const user = async (_, __, { axios }) => {
	const { data } = await axios.get('http://localhost:3000/users/602');
	return data;
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
