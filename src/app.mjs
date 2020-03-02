


import express from 'express';
import graphqlHTTP from 'express-graphql';

import {schemaUser} from './api/UserModule/schema.mjs';
import {resolverUser} from './api/UserModule/resolver.mjs';

import {dbConnect} from './config/db.mjs';

// Create an express server and a GraphQL endpoint
var app = express();

dbConnect();




app.use('/graphql', graphqlHTTP({
  schema: schemaUser,  // Must be provided
  rootValue: resolverUser,
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));