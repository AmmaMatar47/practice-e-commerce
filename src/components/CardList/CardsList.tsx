import styles from './CardsList.module.scss';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchProducts } from './productSlice';
import Card from '../Card/Card';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CardsList = () => {
  const { products, status } = useAppSelector(store => {
    return store.products;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts('/products'));
  }, [dispatch]);

  return (
    <ul className={styles.productsList}>
      {status === 'pending' ? (
        <LoadingSpinner />
      ) : (
        products.map(product => <Card key={product.id} />)
      )}
    </ul>
  );
};

export default CardsList;
