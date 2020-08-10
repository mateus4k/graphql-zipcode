import { fetchCep } from '../services/cep.service';

const Query = {
  Query: {
    cep: (_, { cep }) => fetchCep(cep),
  },
};

export default Query;
