import styles from './ProductDetails.module.scss';

import { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';

import { ProductType } from './../../types/product';

import Overlay from '../../components/Overlay/Overlay';
import Button from './../../components/Button/Button';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ProductDetails = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [isImgOverlayActive, setIsImgOverlayActive] = useState(false);
  const navigation = useNavigation();
  const product: ProductType = useLoaderData();

  const handleImgsClick = (imgNumber: number) => {
    setActiveImg(imgNumber);
  };

  const handleOverlayImg = () => {
    setIsImgOverlayActive(imgOverlay => !imgOverlay);
  };

  if (navigation.state === 'loading') return <LoadingSpinner />;

  return (
    <div className={styles.productPageContainer}>
      <Button backBtn={true}>Back</Button>
      <div className={styles.productContainer}>
        <div className={styles.productImgsContainer}>
          {isImgOverlayActive && (
            <Overlay closeOverlay={handleOverlayImg}>
              <Button
                onClick={() => {
                  setActiveImg(activeImg => activeImg - 1);
                }}
                disabled={activeImg === 0}
                btnClassName='paginationLeftBtn'
              >
                &larr;
              </Button>
              <img
                src={product.images[activeImg]}
                alt={product.title}
                className={styles.overlayImg}
              />
              <Button
                onClick={() => setActiveImg(activeImg => activeImg + 1)}
                disabled={activeImg >= product.images.length - 1}
                btnClassName='paginationRightBtn'
              >
                &rarr;
              </Button>
            </Overlay>
          )}
          <img
            src={product.images[activeImg]}
            alt={product.title}
            className={styles.productImage}
            onClick={handleOverlayImg}
          />
          <ul className={styles.productImgsList}>
            {product.images.map((image, i) => (
              <li
                onClick={() => {
                  handleImgsClick(i);
                }}
                key={image}
              >
                <img src={image} className={styles.productImgItem} />
              </li>
            ))}
          </ul>
        </div>
        <section className={styles.productText}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <span className={styles.productPrice}>$ {product.price}.00 </span>
          <Button>Add to cart</Button>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
