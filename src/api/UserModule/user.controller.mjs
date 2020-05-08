
import User from './user.model.mjs';
import {sendMail} from '../Services/email.service.mjs';


export async function createUser(root, req) {

    try {

        var code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        
        const lol = await sendMail(req.email, code);

        console.log(lol);
            
        // const value = await User.create({ email: req.email, votes: 0, code: code, verified: false })

        return { 
            // data: value._doc, 
            data: {},
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


export async function verifyUser(root, req) {

    try {

        const value = await User.updateOne({
            email: req.email,
            code: req.code
        }, {
            verified: true
        })

        return {
            data: value.n,
            code: 200,
            __typename: "UserMutationCommitted",
            message: "User verified Successfully"
        }

    } catch (err) {
        return {
            __typename: "userMutationNotCommitted",
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



