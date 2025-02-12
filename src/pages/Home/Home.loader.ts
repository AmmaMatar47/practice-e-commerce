import { LoaderFunction } from 'react-router-dom';
import { http } from '../../services/HTTPService';
import { Product } from '../../types/product';
import { API_ENDPOINTS } from '../../services/apiEndPoints';

export const loader: LoaderFunction = async () => {
  return http.request<Product[]>('get', API_ENDPOINTS.PRODUCTS);
};
