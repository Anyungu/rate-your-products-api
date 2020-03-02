

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var { buildSchema } = require('graphql');

export const schemaRating = buildSchema(`
type Query {
  rate(id: String!): Rating
},

type Rating {
  id: ID!
  email: String!
  vote: Boolean!
}
`);
