import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';

const AppLayout = lazy(() => import('./components/AppLayout'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Signup/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='details/:id' element={<ProductDetails />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
