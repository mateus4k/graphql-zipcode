import { gql } from 'apollo-server';

import cepSchema from './cep';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, cepSchema];
