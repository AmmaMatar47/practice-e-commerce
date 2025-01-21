import Nav from './Nav/Nav';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const AppLayout = () => {
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

export default AppLayout;
