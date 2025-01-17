import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Signup/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='details/:id' element={<ProductDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
