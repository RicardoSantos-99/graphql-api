const post = async (_, { id }, { getPosts }) => {
	const post = await getPosts('/' + id);

	return post;
};

const posts = (_, { input }, { getPosts }) => {
	const apiFiltersInput = new URLSearchParams(input);

	return getPosts('/?' + apiFiltersInput);
};

export const postResolvers = {
	Query: { post, posts },
};
