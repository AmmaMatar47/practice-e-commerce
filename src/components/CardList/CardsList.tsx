import styles from './CardsList.module.scss';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, ProductsState } from './productSlice';
import Card from '../Card/Card';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CardsList = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((store: { product: ProductsState }) => {
    return store.product;
  });

  useEffect(() => {
    dispatch(fetchProducts('/products'));
  }, [dispatch]);

  return (
    <ul className={styles.productsList}>
      {status === 'pending' ? (
        <LoadingSpinner />
      ) : (
        products.map(product => <Card data={product} key={product.id} />)
      )}
    </ul>
  );
};

export default CardsList;
