import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
	extend type Query {
		user: User
		users: [User!]
	}

	type User {
		id: ID!
		firstName: String!
		lastName: String!
		userName: String!
		indexRef: Int!
		createAt: String!
		# posts: [Post!]
	}
`;
