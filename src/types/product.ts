import { Status } from '../services/apiFetchData';

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

export interface ProductsState {
  products: [] | ProductType[];
  product: undefined | ProductType;
  status: Status;
  error: null;
}
