
import User from './user.model.mjs';
import {sendMail} from '../Services/email.service.mjs';


export async function createUser(root, req) {

    try {
        
        await sendMail(req.email);
        
        
        const value = await User.create({ email: req.email, votes: 0 })

        return { 
            data: value._doc, 
            code: 200, 
            __typename: "UserMutationCommitted", 
            message: "User Created Successfully" 
        }

    } catch (err) {
        return {
            __typename: "UserMutationNotCommitted",
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
                __typename: "UserQueryFound", 
                message: "User Found" 
            }

        }

        return {
            __typename: "UserQueryNotFound",
            code: 401,
            message: "User not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "UserQueryNotFound",
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
                __typename: "UserQueryFound", 
                message: "Users Found" 
            }

        }

        return {
            __typename: "UserQueryNotFound",
            code: 401,
            message: "Users not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "UserQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}



