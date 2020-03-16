

import {
    createVote,
    updateVote,
    getOneUserVotes,
    getOneShopVotes,
    getOneShoeVotes
} from './vote.controller.mjs';


export var voteResolvers = {
    Mutation: {
        createVote,
        updateVote
    },
    Query: {
       getOneShoeVotes,
       getOneShopVotes,
       getOneUserVotes
    }
};
