const users = async (_, __, { getUsers }) => {
	return getUsers();
};

const user = async (_, { id }, { getUsers }) => {
	return getUsers('/' + id);
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
