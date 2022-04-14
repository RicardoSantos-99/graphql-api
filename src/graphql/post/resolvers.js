const post = async (_, { id }, { getPosts }) => {
	const post = await getPosts('/' + id);

	return post;
};

const posts = (_, { input }, { getPosts }) => {
	const apiFiltersInput = new URLSearchParams(input);

	return getPosts('/?' + apiFiltersInput);
};

const user = async ({ userId }, _, { userDataLoader }) => {
	return userDataLoader.load(userId);
};

export const postResolvers = {
	Query: { post, posts },
	Post: { user },
};
