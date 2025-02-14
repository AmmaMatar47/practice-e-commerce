import styles from './Home.module.scss';

import Card from '../../components/Card/Card';
import { useAppSelector } from '../../hooks/storeHooks';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useEffect, useState } from 'react';
import { http } from '../../services/HTTPService';
import { Product } from '../../types/product';
import { API_ENDPOINTS } from '../../services/apiEndPoints';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { isLoading } = useAppSelector(store => store.global);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await http.request<Product[]>('get', API_ENDPOINTS.PRODUCTS);
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <ul className={styles.productsList}>
      {products.map(product => (
        <Card data={product} key={product.id} />
      ))}
    </ul>
  );
};

export default Home;
