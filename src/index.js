import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
});

server.listen(4000).then(({ url }) => {
	console.log(`🦖  Server ready at ${url}`);
});
