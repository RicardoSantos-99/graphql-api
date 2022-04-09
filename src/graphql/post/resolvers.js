const post = async (_, { id }, { getPosts }) => {
	const post = await getPosts('/' + id);

	if (typeof post.id === 'undefined') {
		return {
			statusCode: '404',
			message: 'Post not found',
		};
	}

	return post;
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
		unixTimestamp: ({ createdAt }) => {
			const date = new Date(createdAt).getTime() / 1000;
			return Math.floor(date);
		},
	},

	PostResult: {
		__resolveType: (obj) => {
			if (typeof obj.statusCode !== 'undefined') {
				return 'PostNotFoundError';
			}

			if (typeof obj.id !== 'undefined') return 'Post';
			return null;
		},
	},
};
