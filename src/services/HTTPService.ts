import axios from 'axios';

export const HTTPService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});
