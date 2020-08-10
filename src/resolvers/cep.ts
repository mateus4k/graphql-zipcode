import { fetchCep } from '../services/cep';

export default {
  Query: {
    cep: async (_, { cep }) => fetchCep(cep),
  },
};
