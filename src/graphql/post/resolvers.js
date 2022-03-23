const post = () => {
	return {
		id: 'post-1',
		title: 'Post 1',
	};
};

const posts = () => {
	return [
		{
			id: 'post-1',
			title: 'Post 1',
		},
		{
			id: 'post-2',
			title: 'Post 1',
		},
	];
};

export const postResolvers = {
	Query: {
		post,
		posts,
	},
};
