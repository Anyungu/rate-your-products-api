
import User from './user.model.mjs';


export async function createUser(root, req) {

    try {

        const value = await User.create({ email: req.email, votes: 0 })

        return { 
            data: value._doc, 
            code: 200, 
            __typename: "UserCreated", 
            message: "User Created Successfully" 
        }

    } catch (err) {
        return {
            __typename: "UserNotCreated",
            code: 401,
            message: err.errmsg
        }
    }

}

export async function getOneUser(root, req) {

    try {

        const user = await User.findOne({ email: req.email });

        if (user) {

            return { 
                data: [user], 
                code: 200, 
                __typename: "QueryFound", 
                message: "User Found" 
            }

        }

        return {
            __typename: "QueryNotFound",
            code: 401,
            message: "User not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "QueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}

export async function getAllUsers(root, req) {

    try {

        const user = await User.find({});

        if (user) {

            return { 
                data: user, 
                code: 200, 
                __typename: "QueryFound", 
                message: "Users Found" 
            }

        }

        return {
            __typename: "QueryNotFound",
            code: 401,
            message: "Users not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "QueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}
