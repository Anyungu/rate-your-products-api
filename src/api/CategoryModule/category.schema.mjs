
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server-express');


export const categoryTypeDefs = gql`

    type Category {
      name: String!
      Items: Int!
    }

    type CategoryMutationNotCommitted {
      code: Int!
      message: String!
    }

    type CategoryMutationCommitted {
      code: Int!
      message: String!
      data: Category!
    }

    union CategoryMutationResult = CategoryMutationCommitted | CategoryMutationNotCommitted

    extend type Mutation {
      createCategory(name: String!): CategoryMutationResult!
    }

    type CategoryQueryNotFound {
      code: Int!
      message: String!
    }

    type CategoryQueryFound {
      code: Int!
      message: String!
      data: [Category]!   
    }

    union CategoryQueryResult = CategoryQueryFound | CategoryQueryNotFound

    extend type Query {
   
      getAllCategories: CategoryQueryResult!
      

    }

`
