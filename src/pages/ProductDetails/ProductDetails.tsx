import styles from './ProductDetails.module.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Product } from './../../types/product';

import Overlay from '../../components/Overlay/Overlay';
import Button from './../../components/Button/Button';
import { http } from '../../services/HTTPService';
import { API_ENDPOINTS } from '../../services/apiEndPoints';
import { useAppSelector } from '../../hooks/storeHooks';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ProductDetails = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [isImgOverlayActive, setIsImgOverlayActive] = useState(false);
  const [product, setProduct] = useState<Product>();
  const { isLoading } = useAppSelector(store => store.global);
  const { id } = useParams();

  const handleImgsClick = (imgNumber: number) => {
    setActiveImg(imgNumber);
  };

  const handleOverlayImg = () => {
    setIsImgOverlayActive(imgOverlay => !imgOverlay);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      const product = await http.request<Product>(
        'get',
        API_ENDPOINTS.SINGLE_PRODUCT(id as string)
      );
      setProduct(product);
    };
    fetchProductData();
  }, []);

  if (product === undefined) return;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className={styles.productPageContainer}>
      <Button backBtn={true}>Back</Button>
      <div className={styles.productContainer}>
        <div className={styles.productImgsContainer}>
          {isImgOverlayActive && (
            <Overlay closeOverlay={handleOverlayImg}>
              {activeImg === 0 ? (
                <></>
              ) : (
                <Button
                  onClick={() => {
                    setActiveImg(activeImg => activeImg - 1);
                  }}
                  btnClassName='paginationLeftBtn'
                >
                  &larr;
                </Button>
              )}

              <img
                src={product.images[activeImg]}
                onError={e =>
                  (e.currentTarget.src =
                    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg')
                }
                alt={product.title}
                className={styles.overlayImg}
              />
              {activeImg >= product.images.length - 1 ? (
                <></>
              ) : (
                <Button
                  onClick={() => setActiveImg(activeImg => activeImg + 1)}
                  btnClassName='paginationRightBtn'
                >
                  &rarr;
                </Button>
              )}
            </Overlay>
          )}
          <img
            src={product.images[activeImg]}
            onError={e => {
              e.currentTarget.src =
                'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg';
            }}
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
