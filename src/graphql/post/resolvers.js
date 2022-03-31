const posts = (_, __, { getPosts }) => {
	return getPosts();
};

const post = (_, { id }, { getPosts }) => {
	return getPosts('/' + id);
};

export const postResolvers = {
	Query: {
		post,
		posts,
	},
};
