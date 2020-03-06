
import Shop from './shop.model.mjs';


export async function createShop(root, req) {

    try {

        const value = await Shop.create({ 
            email: req.email, 
            votes: 0,
            description: req.description,
            name:req.name,
            avail: false,
            shoeCount: 0
         })

        return { 
            data: value._doc, 
            code: 200, 
            __typename: "ShopMutationCommitted", 
            message: "Shop Created Successfully" 
        }

    } catch (err) {
        return {
            __typename: "ShopMutationNotCommitted", 
            code: 401,
            message: err.errmsg
        }
    }

}

export async function getOneShop(root, req) {

    try {

        const shop = await User.findOne({ email: req.email });

        if (shop) {

            return { 
                data: [shop], 
                code: 200, 
                __typename: "ShopQueryFound", 
                message: "Shop Found" 
            }

        }

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: "Shop not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}

export async function getAllShops(root, req) {

    try {

        const shop = await Shop.find({});

        if (shop) {

            return { 
                data: shop, 
                code: 200, 
                __typename: "ShopQueryFound", 
                message: "Shops Found" 
            }

        }

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: "Shops not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}


export async function getAvailableOrUnavailableShops(root, req) {

    try {

        const shop = await Shop.find({avail: req.avail});

        if (shop) {

            return { 
                data: shop, 
                code: 200, 
                __typename: "ShopQueryFound", 
                message: "Shops Found" 
            }

        }

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: "Shops not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}


export async function availOrUnavailShop(root, req) {

    try {

        const value = await Shop.updateOne({ 
            email: req.email
         }, {
             avail: req.avail
         })

        return { 
            data: value.n, 
            code: 200, 
            __typename: "ShopMutationCommitted", 
            message: "Shop Availed Successfully" 
        }

    } catch (err) {
        return {
            __typename: "ShopMutationNotCommitted", 
            code: 401,
            message: err.errmsg
        }
    }

}



