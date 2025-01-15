import { AxiosResponse } from 'axios';
import { productAPIInstance } from './apiProductInstance';

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

interface ProductType {
  category: Category;
  creationAt: Date;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: Date;
}

export const fetchAllProducts = async () => {
  const res: AxiosResponse = await productAPIInstance.get('/products');
  const products: ProductType = res.data;
  console.log(products);
  return products;
};
