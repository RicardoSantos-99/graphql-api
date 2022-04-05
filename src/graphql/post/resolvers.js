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
	Post: {
		unixTimestamp: ({createdAt}) => {
			const date = new Date(createdAt).getTime() / 1000
			return Math.floor(date)
		}
	}
};
