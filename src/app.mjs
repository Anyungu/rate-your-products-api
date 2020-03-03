

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { ApolloServer} = require('apollo-server');

import {typeDefs} from './api/UserModule/user.schema.mjs';
import {resolvers} from './api/UserModule/user.resolver.mjs';

import {dbConnect} from './config/db.mjs';

// Create an express server and a GraphQL endpoint


dbConnect();



const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});