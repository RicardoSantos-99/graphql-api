import { gql } from 'apollo-server-core';
import { postTypeDefs } from './post/typedefs';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typedefs';
import { postResolvers } from './post/resolvers';
import {apiFiltersTypedefs} from "./api-filters/typedefs";

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

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypedefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
