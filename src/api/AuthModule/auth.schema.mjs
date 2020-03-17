

import { createRequire } from 'module';
const require = createRequire(import.meta.url);



const { gql } = require('apollo-server');


export const authTypeDefs = gql`

scalar DateTime

type Auth {
    _id: String!
    token: String!
    createdAt: DateTime!
    expiresAt: DateTime!
}

type AuthMutationNotCommitted {
    code: Int!
    message: String!
}

type AuthMutationCommitted {
    code: Int!
    message: String!
    data: [Auth]!
}

union AuthMutationResult = AuthMutationCommitted | AuthMutationNotCommitted


`;