

import {
    createShoe,
    getShopShoes,
    getAllShoes,
} from './shoe.controller.mjs';


export var shoeResolvers = {
    Mutation: {
        createShoe,
    },
    Query: {
        getShopShoes,
        getAllShoes,
      
    }
};
