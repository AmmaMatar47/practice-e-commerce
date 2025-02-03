import { ProductType } from '../../types/product';

import styles from './Card.module.scss';

import { Link } from 'react-router';

const Card = ({ data }: { data: ProductType }) => {
  const fixedImgSrc = data.images[0].replace('[', '').replace(']', '').replaceAll('"', '');

  return (
    <Link to={`details/${data.id}`} className={styles.cardContainer}>
      <img src={fixedImgSrc} alt={data.description} className={styles.cardImage} />
      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <span className={styles.cardPrice}>{data.price}.00</span>
      </div>
    </Link>
  );
};

export default Card;
