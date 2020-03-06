
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server');

import { userTypeDefs as User } from './UserModule/user.schema.mjs';
import { userResolvers } from './UserModule/user.resolver.mjs';

import { shopTypeDefs as Shop } from './ShopModule/shop.schema.mjs';
import { shopResolvers } from './ShopModule/shop.resolver.mjs';

import { shoeTypeDefs as Shoe } from './ShoeModule/shoe.schema.mjs';
import { shoeResolvers } from './ShoeModule/shoe.resolver.mjs';


const Root = gql`
        type Query {
            root: String
        }

        type Mutation {
            root: String
        }
          
`


export const typeDefs =
    [Root, User, Shop, Shoe]



export const resolvers = 
    [userResolvers, shopResolvers, shoeResolvers]


