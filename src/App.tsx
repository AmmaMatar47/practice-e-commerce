import { lazy, Suspense } from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router';
import { createRoutesFromElements } from 'react-router';

const ProductsLayout = lazy(() => import('./components/ProductsLayout'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Signup/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

import Home from './pages/Home/Home.tsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import { loader as productDetailsLoader } from './pages/ProductDetails/ProductDetails.loader.ts';
import { loader as productsLoader } from './pages/Home/Home.loader.ts';
import ErrorElement from './components/Error/ErrorElement.tsx';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductsLayout />
          </Suspense>
        }
        errorElement={<ErrorElement />}
      >
        <Route
          index
          element={<Home />}
          loader={productsLoader}
          hydrateFallbackElement={<LoadingSpinner />}
          errorElement={<ErrorElement />}
        />

        <Route
          path='details/:id'
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductDetails />
            </Suspense>
          }
          loader={productDetailsLoader}
          hydrateFallbackElement={<LoadingSpinner />}
          errorElement={<ErrorElement />}
        />
      </Route>

      <Route
        path='login'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        }
      />

      <Route
        path='signup'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SignUp />
          </Suspense>
        }
      />
      <Route path='*' element={<PageNotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
