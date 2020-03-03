
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const {  gql } = require('apollo-server');


export const typeDefs = gql`
type Query {
  user(id: Int!): User
  users(gender: String): [User]
}

type User {
  id: String 
  votes: Int 
}

type UserNotFound {
  message: String!
}

type UserNotCreated {
  message: String!
}

union UserCreateResult = User | UserNotCreated

type Mutation {
  createUser(id: String!): UserCreateResult!
}
`;
