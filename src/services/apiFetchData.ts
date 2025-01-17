import { AxiosResponse } from 'axios';
import { HTTPService } from './HTTPService';

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface ProductType {
  category: Category;
  creationAt: Date;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: Date;
}

export const fetchData = async (params: string) => {
  const res: AxiosResponse = await HTTPService.get(params);
  const products: ProductType[] = res?.data;
  return products;
};
