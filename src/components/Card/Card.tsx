import { Product } from '../../types/product';
import Button from '../Button/Button';
import Cart from '../../assets/icons/shopping-cart.svg';
import SVG from 'react-inlinesvg';
import styles from './Card.module.scss';

import { Link } from 'react-router';

const Card = ({ data }: { data: Product }) => {
  return (
    <Link to={String(data.id)} className={styles.cardContainer}>
      <img
        src={data.images[0]}
        onError={e =>
          (e.currentTarget.src =
            'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg')
        }
        alt={data.description}
        className={styles.cardImage}
      />

      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.cardPrice}>{data.price}.00 $</span>
          <Button>
            <SVG src={Cart} />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
