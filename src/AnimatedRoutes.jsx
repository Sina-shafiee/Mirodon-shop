import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const NotFound = lazy(() => import('./routes/NotFound'));
const SignIn = lazy(() => import('./routes/SignIn'));
const Profile = lazy(() => import('./routes/Profile'));
const ProductPage = lazy(() => import('./routes/ProductPage'));
import Home from './routes/Home';

import ScrollToTop from './util/scrollToTop';
import PrivateRoute from './routes/PrivateRoute';
import { SpinnerLoading } from './components';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />

      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route
          path='/product/:id'
          element={
            <Suspense fallback={<SpinnerLoading />}>
              <ProductPage />
            </Suspense>
          }
        />
        <Route
          path='/sign-in'
          element={
            <Suspense fallback={<SpinnerLoading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Suspense fallback={<SpinnerLoading />}>
                <Profile />
              </Suspense>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path='*'
          element={
            <Suspense fallback={<SpinnerLoading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
