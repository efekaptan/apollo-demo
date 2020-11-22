import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolver from './resolver';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolver
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 80 }, () =>
  console.log(`🚀 Server ready at http://localhost${server.graphqlPath}`)
);
