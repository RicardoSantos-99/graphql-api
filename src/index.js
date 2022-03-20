import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      world: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello world!',
      world: () => 'Hello world!',
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
