
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var { buildSchema } = require('graphql');

export const schemaUser = buildSchema(`
type Query {
  user(id: Int!): User
  users(gender: String): [User]
},

type User {
  id: String
  votes: Int
}
`);
