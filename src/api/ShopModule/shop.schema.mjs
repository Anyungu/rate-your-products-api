

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');


export const shopTypeDefs = gql`

    type Shop {
        email: String!
        name: String!
        votes: Int!
        description: String!
        password: String!
    }

    type ShopMutationNotCommitted {
        code: Int!
        message: String!
    }

    type ShopMutationCommitted {
        code: Int!
        message: String!
        data: [Shop]!
    }

    union ShopMutationResult = ShopMutationCommitted | ShopMutationNotCommitted

    extend type Mutation {
        createShop(email: String!, name: String!, description: String!, password: String!): ShopMutationResult!
        availOrUnavailShop(email: String!, avail:Boolean): ShopMutationResult!
        logInShop(email: String!, password: String!): AuthMutationResult!
    }

    type ShopQueryNotFound {
        code: Int!
        message: String!
    }

    type ShopQueryFound {
        code: Int!
        message: String!
        data: [Shop]!   
    }

    union ShopQueryResult = ShopQueryFound | ShopQueryNotFound

    extend type Query {
        getOneShop(email: String!): ShopQueryResult!
        getAllShops: ShopQueryResult!
        getAvailableOrUnavailableShops(avail: Boolean!): ShopQueryResult!

    }

`;
