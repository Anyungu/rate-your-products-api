

import {
    createShop,
    getOneShop,
    getAllShops,
    getAvailableOrUnavailableShops,
    availOrUnavailShop,
    logInShop
} from './shop.controller.mjs';


export var shopResolvers = {
    Mutation: {
        createShop,
        availOrUnavailShop,
        logInShop
    },
    Query: {
        getOneShop,
        getAllShops,
        getAvailableOrUnavailableShops
    }
};
