
import Shop from './shop.model.mjs';
import { hash, match } from '../Services/bcrypt.service.mjs';
import {createToken} from '../AuthModule/auth.service.mjs';


export async function createShop(root, req) {

    try {

        const hashP = await hash(req.password);

        const value = await Shop.create({
            email: req.email,
            votes: 0,
            description: req.description,
            name: req.name,
            avail: false,
            shoeCount: 0,
            password: hashP
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

        console.log(req);

        const shop = await Shop.findOne({ email: req.email });

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

export async function logInShop(root, req) {

    try {
        
        const shop = await Shop.findOne({ email: req.email });

        if (shop) {

            const matchP = await match(req.password, shop.password);

            if (matchP) {

                const obj = await createToken(req.email);

                console.log(obj)

                if (obj.bool) {

                    return {
                        data: [obj.tok],
                        code: 200,
                        __typename: "AuthMutationCommitted",
                        message: "Shop Found"
                    }

                }else {

                    return {
                        __typename: "AuthMutationNotCommitted",
                        code: 401,
                        message: obj.tok
                    }    

                }


            } else {

                return {
                    __typename: "AuthMutationNotCommitted",
                    code: 401,
                    message: "Shop Password not Correct"
                }

            }

        }

        return {
            __typename: "AuthMutationNotCommitted",
            code: 401,
            message: "Shop Email Not Found"
        }


    } catch (err) {

        return {
            __typename: "AuthMutationNotCommitted",
            code: 401,
            message: String(err)
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

        return {
            __typename: "ShopQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}


export async function getAvailableOrUnavailableShops(root, req) {

    try {

        const shop = await Shop.find({ avail: req.avail });

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
            message: "Shop Updated Successfully"
        }

    } catch (err) {
        return {
            __typename: "ShopMutationNotCommitted",
            code: 401,
            message: err.errmsg
        }
    }

}



