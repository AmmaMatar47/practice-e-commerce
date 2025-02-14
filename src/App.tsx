import { lazy, Suspense } from 'react';

import { createBrowserRouter, Navigate, Outlet, Route, RouterProvider } from 'react-router';
import { createRoutesFromElements } from 'react-router';

const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/Signup/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));

import Home from './pages/Home/Home.tsx';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

import ErrorElement from './components/Error/ErrorElement.tsx';
import PageNotFound from './components/PageNotFound/PageNotFound.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

import Nav from './components/Nav/Nav.tsx';
import Footer from './components/Footer/Footer.tsx';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
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
        <Route
          element={
            <ProtectedRoute>
              <>
                <Nav />
                <main>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                  </Suspense>
                </main>
                <Footer />
              </>
            </ProtectedRoute>
          }
          errorElement={<ErrorElement />}
        >
          <Route path='/' element={<Navigate to='/products' replace={true} />} />
          <Route path='products' element={<Home />} errorElement={<ErrorElement />} />
          <Route path='products/:id' element={<ProductDetails />} errorElement={<ErrorElement />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
