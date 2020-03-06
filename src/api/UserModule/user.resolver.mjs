

import { createUser, getOneUser, getAllUsers } from './user.controller.mjs';


export var userResolvers = {
    Mutation: {
        createUser
    },
    Query: {
        getOneUser,
        getAllUsers
    }
};
