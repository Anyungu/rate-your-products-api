
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');


export const typeDefs = gql`

type User {
  email: String 
  votes: Int 
}

type UserNotCreated {
  code: Int!
  message: String!
}

type UserCreated {
  code: Int!
  message: String!
  data: User!
}

union UserCreateResult = UserCreated | UserNotCreated

type Mutation {
  createUser(email: String!): UserCreateResult!
}

type QueryNotFound {
  code: Int!
  message: String!
}

type QueryFound {
  code: Int!
  message: String!
  data: [User]!
}

union UserResult = QueryFound | QueryNotFound

type Query {
  getOneUser(email: String!): UserResult!
  getAllUsers: UserResult!
}

`;
