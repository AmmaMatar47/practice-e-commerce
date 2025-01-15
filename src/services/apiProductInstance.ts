import axios from 'axios';

export const productAPIInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
});
