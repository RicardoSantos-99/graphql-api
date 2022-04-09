import { gql } from 'apollo-server-core';

export const postTypeDefs = gql`
	extend type Query {
		post(id: ID!): PostResult!
		posts(input: ApiFiltersInput): [Post!]!
	}

	union PostResult = PostNotFoundError | Post

	type PostNotFoundError {
		statusCode: String!
		message: String!
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		# user: User!
		indexRef: Int!
		createAt: String!
		unixTimestamp: String!
	}
`;
