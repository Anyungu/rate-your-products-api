


import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');


export const shoeTypeDefs = gql`

    type Shoe {
      url: String!
      votePlus: Int!
      voteMinus: Int!
      shopEmail: String!
    }


    type ShoeMutationNotCommitted {
      code: Int!
      message: String!
    }

    type ShoeMutationCommitted {
      code: Int!
      message: String!
      data: Shoe!
    }

    union ShoeMutationResult = ShoeMutationCommitted | ShoeMutationNotCommitted

    extend type Mutation {
      createShoe(file: Upload!, shopEmail: String!): ShoeMutationResult!
    }

    type ShoeQueryNotFound {
      code: Int!
      message: String!
    }

    type ShoeQueryFound {
      code: Int!
      message: String!
      data: [Shoe]!   
    }

    union ShoeQueryResult = ShoeQueryFound | ShoeQueryNotFound

    extend type Query {
   
      getAllShoes: ShoeQueryResult!
      getShopShoes(shopEmail: String!): ShoeQueryResult!

    }

`
