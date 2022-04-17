const post = async (_, { id }, { dataSources }) => {
	return dataSources.postApi.getPost(id);
};

const posts = (_, { input }, { dataSources }) => {
	return dataSources.postApi.getPosts(input);
};

const user = async ({ userId }, _, { userDataLoader }) => {
	return userDataLoader.load(userId);
};

export const postResolvers = {
	Query: { post, posts },
	Post: { user },
};
