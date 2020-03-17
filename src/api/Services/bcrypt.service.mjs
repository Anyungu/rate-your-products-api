
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function hash (rawPassword) {

   return bcrypt.hash(rawPassword, saltRounds).then(function(hash) {
        return hash;
    });
    
}

export async function match (rawPassword, hashedPassword) {

   return bcrypt.compare(rawPassword, hashedPassword).then(function(result) {
        return result
    });

}

export async function generateToken(email, createdAt) {

    return bcrypt.hash(email + createdAt.toLocaleString() , saltRounds).then(function(hash) {
        return hash;
    });

}