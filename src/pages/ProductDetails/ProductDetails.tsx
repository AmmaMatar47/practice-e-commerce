import { useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {}, []);

  return <h1>Product Details</h1>;
};

export default ProductDetails;
