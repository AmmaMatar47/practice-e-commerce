import styles from './Home.module.scss';

import Card from '../../components/Card/Card';
import { useLoaderData, useNavigation } from 'react-router';
import { ProductType } from '../../types/product';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Home = () => {
  const products: ProductType[] = useLoaderData();
  const navigation = useNavigation();

  return navigation.state === 'idle' ? (
    <ul className={styles.productsList}>
      {products.map(product => (
        <Card data={product} key={product.id} />
      ))}
    </ul>
  ) : (
    <LoadingSpinner />
  );
};

export default Home;
