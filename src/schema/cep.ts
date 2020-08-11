import { gql } from 'apollo-server';

export default gql`
    type Cep {
        cep: String!
        logradouro: String!
        complemento: String!
        bairro: String!
        localidade: String!
        uf: String!
        unidade: String!
        ibge: String!
        gia: String!
    }

    extend type Query {
        cep(cep: String!): Cep
    }
`;
