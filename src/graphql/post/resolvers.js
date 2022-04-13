import DataLoader from 'dataloader';
import axios from 'axios';

const post = async (_, { id }, { getPosts }) => {
	const post = await getPosts('/' + id);

	return post;
};

const posts = (_, { input }, { getPosts }) => {
	const apiFiltersInput = new URLSearchParams(input);

	return getPosts('/?' + apiFiltersInput);
};

const userDataLoader = new DataLoader(async (ids) => {
	const urlQuery = ids.join('&id=');

	const url = 'http://localhost:3000/users?id=' + urlQuery;

	const { data: users } = await axios.get(url);

	return ids.map((id) => users.find((user) => user.id === id));
});

const user = async ({ userId }, _, { getUsers }) => {
	return userDataLoader.load(userId);
};

export const postResolvers = {
	Query: { post, posts },
	Post: { user },
};
