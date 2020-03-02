


import { createRequire } from 'module';
const require = createRequire(import.meta.url);
var { buildSchema } = require('graphql');

export const schemaShoe = buildSchema(`
type Query {
  shoe(id: String!): Shoe
  shopShoes(shopID: String!): [Shoe]
},

type Shoe {
  id: ID!
  url: String!
  vote+: Int!
  vote-: Int!
  shopID: String!
}
`);
