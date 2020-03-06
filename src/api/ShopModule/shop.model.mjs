

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const shopSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },
    
    votes : {
        type: Number,
        required: [true, 'vote tally is required']
    },

    name: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },

    description: {
        type: String,
    },
    avail: {
        type: Boolean
    },
    shoeCount: {
        type: Number
    }
});

shopSchema.plugin(mongoosePaginate);

export default mongoose.model('Shop', shopSchema);