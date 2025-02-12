import { Status } from './user';

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface Product {
  category: Category;
  creationAt: Date;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: Date;
}

export interface ProductsState {
  products: [] | Product[];
  product: undefined | Product;
  status: Status;
  error: null;
}
