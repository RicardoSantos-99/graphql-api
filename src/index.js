import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import axios from 'axios';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({
		axios,
	}),
});

server.listen(4003).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
