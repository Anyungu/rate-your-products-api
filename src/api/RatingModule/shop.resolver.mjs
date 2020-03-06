

import {
    createShop,
    getOneShop,
    getAllShops,
    getAvailableOrUnavailableShops,
    availOrUnavailShop
} from './shop.controller.mjs';


export var shopResolvers = {
    Mutation: {
        createShop,
        availOrUnavailShop
    },
    Query: {
        getOneShop,
        getAllShops,
        getAvailableOrUnavailableShops
    }
};
