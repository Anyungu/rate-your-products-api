


import Shoe from './shoe.model.mjs';


export async function createShoe(root, {file , shopEmail}) {

    

}



export async function getAllShoes(root, req) {

    try {

        const shoe = await Shoe.find({});

        if (shoe) {

            return { 
                data: shoe, 
                code: 200, 
                __typename: "ShoeQueryFound", 
                message: "Shoes Found" 
            }

        }

        return {
            __typename: "ShoeQueryNotFound",
            code: 401,
            message: "Shoes not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "ShoeQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}


export async function getShopShoes(root, req) {

    try {

        const shoe = await Shoe.find({shopEmail: req.shopEmail});

        if (shoe) {

            return { 
                data: shoe, 
                code: 200, 
                __typename: "ShoeQueryFound", 
                message: "Shoes Found" 
            }

        }

        return {
            __typename: "ShoeQueryNotFound",
            code: 401,
            message: "Shoes not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "ShoeQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}






