const post = (_, { id }, { getPosts }) => {
	return getPosts('/' + id);
};

const posts = (_, { input }, { getPosts }) => {
	const apiFiltersInput = new URLSearchParams(input);

	return getPosts('/?' + apiFiltersInput);
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
