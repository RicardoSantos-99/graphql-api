import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
	typeDefs: gql`
		type Query {
			user: User!
			users: [User]
		}

		type User {
			id: ID!
			name: String
		}
	`,
	resolvers: {
		Query: {
			user: () => ({
				id: '1',
				name: 'John Doe',
			}),
			users: () => [
				{
					id: '1',
					name: 'John Doe',
				},
				{
					id: '2',
					name: 'Jane Doe',
				},
			],
		},
	},
});

server.listen(4003).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
