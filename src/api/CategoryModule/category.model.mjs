
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const {Schema} = mongoose;


const categorySchema = new Schema({

    name: {
        type: String,
        required: [true, 'Email is required'],
    },
    
    Items : {
        type: Number,
    },

   
    
});

categorySchema.plugin(mongoosePaginate);

export default mongoose.model('Category', categorySchema);