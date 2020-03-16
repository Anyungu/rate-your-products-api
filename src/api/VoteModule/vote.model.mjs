

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const voteSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },
    
    shopEmail: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },
    

    vote : {
        type: Number,
        required: [true, 'vote tally is required']
    },

    
    shoeID: {
        type: String,
        required: [true, 'shoeID tally is required']
    }
});

voteSchema.plugin(mongoosePaginate);

export default mongoose.model('Vote', voteSchema);