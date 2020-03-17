
import Auth from './auth.model.mjs';
import {generateToken} from '../Services/bcrypt.service.mjs';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);


var moment = require('moment-timezone');


export async function createToken (email) {

    var obj = {};

    try {

        const auth = await Auth.findOne({_id: email})

        var dateString = new Date().toLocaleString();

        var m = moment.tz(dateString, "Africa/Nairobi");

        var dateC = new Date(m.format());

        var dateD = new Date(m.format());

        dateD.setDate(dateC.getDate() + 10);

        const tok = await generateToken(email, dateC);

        if (auth) {

            auth.overwrite({ 
                _id: email,
                token: tok,
                createdAt: dateC,
                expiresAt: dateD
            });

            await auth.save();

            obj.bool = true;
            obj.tok = auth;
            return obj; 

        }else {

            const create = await Auth.create({
                _id: email,
                token: tok,
                createdAt: dateC,
                expiresAt: dateD
            });

            obj.bool = true;
            obj.tok = create._doc;
            return obj; 

        }

    }catch (err) {

        obj.bool = false;
        obj.tok = String(err);
        return obj; 
    }

   



}