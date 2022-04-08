
const user = async (_, { id }, { getUsers }) => {
	return getUsers('/' + id);
};

const users = async (_, {input}, { getUsers }) => {
	const apiFiltersInput = new URLSearchParams(input);
	return getUsers();
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
