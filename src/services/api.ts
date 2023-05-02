import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sandbox.melhorenvio.com.br/api/v2/me/shipment',
});
