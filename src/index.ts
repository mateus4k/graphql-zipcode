import { ApolloServer } from 'apollo-server';
import { cep as cepType } from './types';
import { cep as cepResolver } from './resolvers';

const server = new ApolloServer({
  typeDefs: cepType,
  resolvers: cepResolver,
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running in ${url}`);
});
