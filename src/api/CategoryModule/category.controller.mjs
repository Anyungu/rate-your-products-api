

import Category from './category.model.mjs';


export async function createCategory(root, req) {

    try {

        const value = await Category.create({
           name: req.name,
           Items: 0
        })

        return {
            data: value._doc,
            code: 200,
            __typename: "CategoryMutationCommitted",
            message: "Category Created Successfully"
        }

    } catch (err) {
        return {
            __typename: "CategoryMutationNotCommitted",
            code: 401,
            message: err.errmsg
        }
    }

}



export async function getAllCategories(root, req) {

    try {

        const category = await Category.find({});

        if (category) {

            return { 
                data: category, 
                code: 200, 
                __typename: "CategoryQueryFound", 
                message: "Categorys Found" 
            }

        }

        return {
            __typename: "CategoryQueryNotFound",
            code: 401,
            message: "Categorys not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "CategoryQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}









