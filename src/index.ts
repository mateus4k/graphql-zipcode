import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import { cep as cepResolver } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers: cepResolver,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
