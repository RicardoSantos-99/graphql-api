const user = async (_, { id }, { getUsers }) => {
	return getUsers('/' + id);
};

const users = async (_, __, { getUsers }) => {
	return getUsers();
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
