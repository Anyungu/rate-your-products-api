

import { createUser, getOneUser, getAllUsers, verifyUser } from './user.controller.mjs';


export var userResolvers = {
    Mutation: {
        createUser,
        verifyUser
    },
    Query: {
        getOneUser,
        getAllUsers
    }
};
