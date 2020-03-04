

import User from './user.model.mjs';


export async function createUser(root, req, res) {



    try {

        const value = await User.create({ email: req.id, votes: 0 })

        const x = {__typename: "User"}


        return { ...value._doc , ...x}
            


    } catch (err) {
        return {
            __typename: "UserNotCreated",
            message: err.errmsg
        }
    }

}
