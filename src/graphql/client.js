import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from '../config/config';

const client = new ApolloClient({
  uri: config.GRAPHQL_API,
  cache: new InMemoryCache(),
});

export default client;
