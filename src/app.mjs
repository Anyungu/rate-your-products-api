

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { ApolloServer} = require('apollo-server');

import {typeDefs} from './api/index.mjs';
import {resolvers} from './api/index.mjs';

import {dbConnect} from './config/db.mjs';


dbConnect();

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});