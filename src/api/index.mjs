
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { gql } = require('apollo-server-express');

import { userTypeDefs as User } from './UserModule/user.schema.mjs';
import { userResolvers } from './UserModule/user.resolver.mjs';

import { shopTypeDefs as Shop } from './ShopModule/shop.schema.mjs';
import { shopResolvers } from './ShopModule/shop.resolver.mjs';

import { shoeTypeDefs as Shoe } from './ShoeModule/shoe.schema.mjs';
import { shoeResolvers } from './ShoeModule/shoe.resolver.mjs';


import { voteTypeDefs as Vote } from './VoteModule/vote.schema.mjs';
import { voteResolvers } from './VoteModule/vote.resolver.mjs';

import {authTypeDefs as Auth} from './AuthModule/auth.schema.mjs';

import { categoryTypeDefs as Category } from './CategoryModule/category.schema.mjs';
import { categoryResolvers } from './CategoryModule/category.resolver.mjs';


const Root = gql `
        type Query {
            root: String
        }

        type Mutation {
            root: String
        }        
`


export const typeDefs =
    [Root, User, Shop, Shoe, Vote, Auth, Category]



export const resolvers = 
    [userResolvers, shopResolvers, shoeResolvers, voteResolvers, categoryResolvers]


