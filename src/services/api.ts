import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'https://viacep.com.br/ws';

function fetch<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
  return axios.get(url, config);
}

export { fetch };
