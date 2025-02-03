import styles from './CardsList.module.scss';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { fetchProducts } from '../../redux/reducers/product.reducer';
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

  return status === 'pending' ? (
    <LoadingSpinner />
  ) : (
    <ul className={styles.productsList}>
      {products.map(product => (
        <Card data={product} key={product.id} />
      ))}
    </ul>
  );
};

export default CardsList;
