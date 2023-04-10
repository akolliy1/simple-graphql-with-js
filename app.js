import express from "express";
import graphqlServer from "./graphql"; // We imported this

const app = express();

async function startApolloServer() {
  // Required logic for integrating with Express
  await graphqlServer.start();

  graphqlServer.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: "/",
  });
}

startApolloServer();

export default app;
