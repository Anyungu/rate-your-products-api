


import {
    createCategory,
    getAllCategories
} from './category.controller.mjs';


export var categoryResolvers = {
    Mutation: {
        createCategory
    },
    Query: {
        getAllCategories,
    }
};
