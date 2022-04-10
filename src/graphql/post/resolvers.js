const post = async (_, { id }, { getPosts }) => {
	const post = await getPosts('/' + id);

	if (Math.random() > 0.5) {
		return {
			statusCode: 500,
			message: 'Post timeout',
			timeout: 123,
		};
	}

	if (typeof post.id === 'undefined') {
		return {
			statusCode: 404,
			message: 'Post not found',
			postId: id,
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
			if (typeof obj.postId !== 'undefined') {
				return 'PostNotFoundError';
			}

			if (typeof obj.timeout !== 'undefined') {
				return 'PostTimeoutError';
			}

			if (typeof obj.id !== 'undefined') return 'Post';
			return null;
		},
	},

	PostError: {
		__resolveType: (obj) => {
			if (typeof obj.postId !== 'undefined') {
				return 'PostNotFoundError';
			}

			if (typeof obj.timeout !== 'undefined') {
				return 'PostTimeoutError';
			}
		},
	},
};
