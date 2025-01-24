import { AxiosResponse } from 'axios';
import { HTTPService } from './HTTPService';
import { ProductType } from '../types/product';

export type Status = 'idle' | 'pending' | 'failed' | 'succeeded';

export const fetchData = async (params: string) => {
  const res: AxiosResponse<ProductType[] | ProductType> = await HTTPService.get(params);
  return res.data;
};
