


import mongoose from 'mongoose';


mongoose.PromiseProvider = global.Promise;

export const dbConnect = () => mongoose.connect('mongodb://ltkfinal:my%20password@168.62.174.233:27017/admin?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {useNewUrlParser: true});