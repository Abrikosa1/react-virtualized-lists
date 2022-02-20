import Axios, { AxiosInstance } from 'axios';
import { config } from '../config';

console.log(config.API_URL);

export class Http {
  constructor(private readonly _axios: AxiosInstance) {}

  get get() {
    return this._axios.get;
  }

  get post() {
    return this._axios.post;
  }

  get put() {
    return this._axios.put;
  }

  get patch() {
    return this._axios.patch;
  }

  get delete() {
    return this._axios.delete;
  }

  get axios(): AxiosInstance {
    return this._axios;
  }
}

export const http = new Http(
  Axios.create({
    baseURL: config.API_URL,
  })
);
