

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');


export const voteTypeDefs = gql`

    type Vote {
        email: String!
        shopEmail: String!
        vote: Int!
        shoeID: String!
    }

    type VoteMutationNotCommitted {
        code: Int!
        message: String!
    }

    type VoteMutationCommitted {
        code: Int!
        message: String!
        data: Vote!
    }

    union VoteMutationResult = VoteMutationCommitted | VoteMutationNotCommitted

    extend type Mutation {
        createVote(email: String!, shopEmail: String!, vote: Int! shoeID: String!): VoteMutationResult!
        updateVote(voteID: String!, vote: Int!): VoteMutationResult!
    }

    type VoteQueryNotFound {
        code: Int!
        message: String!
    }

    type VoteQueryFound {
        code: Int!
        message: String!
        data: [Vote]!   
    }

    union VoteQueryResult = VoteQueryFound | VoteQueryNotFound

    extend type Query {
        getOneVote(email: String!): VoteQueryResult!
        getAllVotes: VoteQueryResult!
        getAvailableOrUnavailableVotes(avail: Boolean!): VoteQueryResult!

    }

`;
