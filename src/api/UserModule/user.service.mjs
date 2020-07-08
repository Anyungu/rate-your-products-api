
import User from './user.model.mjs';


export async function getOneuser(email) {


    try {

        const user = await User.findOne({ email });

        if (user) {

            return {

                message: "User Found",
                user: user
            }

        }

        return {
            message: "User not Found"
        }

    } catch (err) {

        return {

            message: err.errmsg,

        }

    }

}