

import { createUser, getOneUser, getAllUsers } from './user.controller.mjs';


export var resolvers = {
    Mutation: {
        createUser
    },
    Query: {
        getOneUser,
        getAllUsers
    }
};
