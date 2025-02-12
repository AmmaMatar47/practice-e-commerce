import { lazy, Suspense, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks.ts';

import { createBrowserRouter, Navigate, Route, RouterProvider } from 'react-router';
import { login } from './redux/reducers/user.reducer.ts';
import { createRoutesFromElements } from 'react-router';

const ProductsLayout = lazy(() => import('./components/ProductsLayout'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Signup/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

import Home from './pages/Home/Home.tsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import ErrorElement from './components/Error/ErrorElement.tsx';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

import { loader as productDetailsLoader } from './pages/ProductDetails/ProductDetails.loader.ts';
import { loader as productsLoader } from './pages/Home/Home.loader.ts';

const App = () => {
  const isUserTokenAvailable = !!localStorage.getItem('Token');
  const { isLoggedIn } = useAppSelector(store => store.user);
  const dispatch = useAppDispatch();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={
            <ProtectedRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <ProductsLayout />
              </Suspense>
            </ProtectedRoute>
          }
          errorElement={<ErrorElement />}
        >
          {/* Prevent making a http requests from children routes and executing unnecessary code   */}
          {isLoggedIn ? (
            <>
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
            </>
          ) : (
            <Route index element={<Navigate to='signup' replace={true} />} />
          )}
          )
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

  useEffect(() => {
    if (isUserTokenAvailable && !isLoggedIn) dispatch(login());
  }, [dispatch, isUserTokenAvailable]);

  return <RouterProvider router={router} />;
};

export default App;
