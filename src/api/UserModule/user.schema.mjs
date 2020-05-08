
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');


export const userTypeDefs = gql`

type User {
  email: String 
  votes: Int 
  verified: Boolean
}

type UserMutationNotCommitted {
  code: Int!
  message: String!
}

type UserMutationCommitted {
  code: Int!
  message: String!
  data: User!
}

union UserMutationResult = UserMutationCommitted | UserMutationNotCommitted

extend type Mutation {
  createUser(email: String!): UserMutationResult!
  verifyUser(email: String!, code: Int!): UserMutationResult!
}

type UserQueryNotFound {
  code: Int!
  message: String!
}

type UserQueryFound {
  code: Int!
  message: String!
  data: [User]!
}

union UserQueryResult = UserQueryFound | UserQueryNotFound

extend type Query {
  getOneUser(email: String!): UserQueryResult!
  getAllUsers: UserQueryResult!
}

`;
