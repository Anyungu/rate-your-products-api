
import Vote from './vote.model.mjs';


export async function createVote(root, req) {

    try {

        const value = await Vote.create({ 
            email: req.email, 
            shopEmail: req.shopEmail,
            vote: req.vote,
            shoeID: req.shoeID
            
         })

        return { 
            data: value._doc, 
            code: 200, 
            __typename: "VoteMutationCommitted", 
            message: "Vote Created Successfully" 
        }

    } catch (err) {
        return {
            __typename: "VoteMutationNotCommitted", 
            code: 401,
            message: err.errmsg
        }
    }

}


export async function updateVote(root, req) {

    try {

        const value = await Vote.updateOne({ 
           _id: req.voteID
            
         }, {
             vote: req.vote
         })

        return { 
            data: value.n, 
            code: 200, 
            __typename: "VoteMutationCommitted", 
            message: "Vote Updated Successfully" 
        }

    } catch (err) {
        return {
            __typename: "VoteMutationNotCommitted", 
            code: 401,
            message: err.errmsg
        }
    }

}

export async function getOneUserVote(root, req) {

    try {

        const vote = await Vote.findOne({ email: req.email });

        if (vote) {

            return { 
                data: [vote], 
                code: 200, 
                __typename: "VoteQueryFound", 
                message: "Votes Found" 
            }

        }

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: "Vote not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}


export async function getOneShopVotes(root, req) {

    try {

        const vote = await Vote.findOne({ shopEmail: req.shopEmail });

        if (vote) {

            return { 
                data: [vote], 
                code: 200, 
                __typename: "VoteQueryFound", 
                message: "Votes Found" 
            }

        }

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: "Vote not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}

export async function getOneUserVotes(root, req) {

    try {

        const vote = await Vote.findOne({ email: req.email });

        if (vote) {

            return { 
                data: [shop], 
                code: 200, 
                __typename: "VoteQueryFound", 
                message: "Votes Found" 
            }

        }

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: "Vote not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}

export async function getOneShoeVotes(root, req) {

    try {

        const vote = await Vote.findOne({ shoeID: req.shoeID });

        if (vote) {

            return { 
                data: [vote], 
                code: 200, 
                __typename: "VoteQueryFound", 
                message: "Votes Found" 
            }

        }

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: "Vote not Found"
        }

        

    } catch (err) {

        console.log(err);

        return {
            __typename: "VoteQueryNotFound",
            code: 401,
            message: err.errmsg
        }

    }

}








