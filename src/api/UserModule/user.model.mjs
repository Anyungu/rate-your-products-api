

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const userSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is unique']
    },
    
    votes : {
        type: Number,
        required: [true, 'vote tally is required']
    },
});

userSchema.plugin(mongoosePaginate);

export default mongoose.model('User', userSchema);