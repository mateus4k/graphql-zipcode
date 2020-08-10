import { fetch } from './api';

const fetchCep = (cep): Promise<Object> => (
  fetch(`/${cep}/json/`)
    .then((response) => response.data)
    .catch((error) => error)
);

export { fetchCep };
