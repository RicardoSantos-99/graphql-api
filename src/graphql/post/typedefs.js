import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
	extend type Query {
		post(id: ID!): Post!
		posts(input: ApiFiltersInput): [Post!]!
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		user: User!
		indexRef: Int!
		createAt: String!
	}
`;
