import { Product } from '../../types/product';

import styles from './Card.module.scss';

import { Link } from 'react-router';

const Card = ({ data }: { data: Product }) => {
  const fixedImgSrc = data.images[0]
    .replace('[', '')
    .replace(']', '')
    .replaceAll('"', '')
    .replaceAll('\\', '');

  return (
    <Link to={`details/${data.id}`} className={styles.cardContainer}>
      <img
        src={fixedImgSrc}
        onError={e =>
          (e.target.src =
            'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg')
        }
        alt={data.description}
        className={styles.cardImage}
      />

      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <span className={styles.cardPrice}>{data.price}.00</span>
      </div>
    </Link>
  );
};

export default Card;
