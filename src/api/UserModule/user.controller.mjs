

import User from './user.model.mjs';


export async function createUser(root, req, res) {



    try {

        console.log(req);

        const value = await User.create({ id: req.id, votes: 0 })

        const x = {__typename: "User"}


        console.log( { ...x , ...value}
            );


    } catch (err) {
        return {
            __typename: "UserNotCreated",
            message: err.errmsg
        }
    }

}
