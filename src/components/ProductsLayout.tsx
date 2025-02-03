import Nav from './Nav/Nav';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const ProductsLayout = () => {
  return (
    <>
      <Nav />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default ProductsLayout;
