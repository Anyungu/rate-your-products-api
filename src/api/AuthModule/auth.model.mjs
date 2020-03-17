

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const authSchema = new Schema({

    _id: {
        type: String
    },

    token: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },

    createdAt: {
        type: Date,
        required: [true, 'Time is required'],
    },

    expiresAt: {
        type: Date,
        required: [true, 'Time is required'],
    }

});

authSchema.plugin(mongoosePaginate);

export default mongoose.model('Auth', authSchema);