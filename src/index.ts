import { ApolloServer } from 'apollo-server';
import { cep as cepType } from './types';
import { cep as cepResolver } from './resolvers';

const server = new ApolloServer({
  typeDefs: cepType,
  resolvers: cepResolver,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
