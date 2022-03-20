import { gql } from 'apollo-server-express';

const rootTypeDefs = gql`
	type Query {
		hello: String
	}
`;

const rootResolvers = {
	Query: {
		hello: () => 'Hello world!',
	},
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
