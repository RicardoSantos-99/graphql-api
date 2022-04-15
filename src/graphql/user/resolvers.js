const user = async (_, { id }, { getUsers }) => {
	return getUsers('/' + id);
};

const users = async (_, __, { getUsers }) => {
	return getUsers();
};

const posts = async ({ id }, _, { postDataLoader }) => {
	return postDataLoader.load(id);
};

export const userResolvers = {
	Query: {
		user,
		users,
	},
	User: {
		posts,
	},
};
