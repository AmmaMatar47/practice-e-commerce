import { LoaderFunction } from 'react-router-dom';
import { fetchData } from '../../services/apiFetchData';

export const loader: LoaderFunction = async ({ params }) => {
  return fetchData(`products/${params.id}`);
};
