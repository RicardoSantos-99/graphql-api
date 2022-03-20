import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
	typeDefs: gql`
		type Query {
			id: ID
			name: String
			age: Int
			average: Float
			dev: Boolean!
			techs: [String!]!
		}
	`,
	resolvers: {
		Query: {
			id: () => '1',
			name: () => 'ricardo',
			age: () => 24,
			average: () => 7.5,
			dev: () => true,
			techs: () => ['React', 'Node', 'GraphQL'],
		},
	},
});

server.listen(4003).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
