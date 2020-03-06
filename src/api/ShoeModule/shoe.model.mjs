

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const shoeSchema = new Schema({

    shopEmail: {
        type: String,
        required: [true, 'Email is required'],
    },
    
    votePlus : {
        type: Number,
    },

    voteMinus : {
        type: Number,
    },

    url: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },
    
});

shoeSchema.plugin(mongoosePaginate);

export default mongoose.model('Shoe', shoeSchema);