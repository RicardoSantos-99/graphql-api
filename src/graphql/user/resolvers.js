const user = () => {
	return {
		id: '1',
		name: 'John Doe',
	};
};

const users = () => [
	{
		id: '1',
		name: 'John Doe',
	},
	{
		id: '2',
		name: 'Jane Doe',
	},
];

export const userResolvers = {
	Query: {
		user,
		users,
	},
};
