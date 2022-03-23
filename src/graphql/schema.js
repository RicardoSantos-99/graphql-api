import { gql } from 'apollo-server-express';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
	type Query {
		_empty: Boolean
	}
`;

const rootResolvers = {
	Query: {
		_empty: () => true,
	},
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
