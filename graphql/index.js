import { ApolloServer } from 'apollo-server-express';
import { env } from '../config/environment';
import schema from './schema'; // We imported this
import context from './context';

const apolloServer = new ApolloServer({
  schema,// Schema pending...
  context,
  playground: env.development,
});

export default apolloServer;