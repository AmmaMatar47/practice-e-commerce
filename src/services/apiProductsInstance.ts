import axios from 'axios';

export const productAPIInstance = axios.create({
  baseURL: import.meta.env.VITE_PRODUCTS_BASE_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});
