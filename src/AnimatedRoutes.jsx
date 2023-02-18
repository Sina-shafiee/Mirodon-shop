import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const NotFound = lazy(() => import('./routes/NotFound'));
const SignIn = lazy(() => import('./routes/SignIn'));
const Profile = lazy(() => import('./routes/Profile'));
const ProductPage = lazy(() => import('./routes/ProductPage'));
const Cart = lazy(() => import('./routes/Cart'));

import Home from './routes/Home';
import PrivateRoute from './routes/PrivateRoute';
import { SpinnerLoading } from './components';
import ScrollToTop from './util/scrollToTop';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: (
      <Suspense fallback={<SpinnerLoading />}>
        <ProductPage />
      </Suspense>
    )
  },
  {
    path: '/sign-in',
    element: (
      <Suspense fallback={<SpinnerLoading />}>
        <SignIn />
      </Suspense>
    )
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/profile',
        element: (
          <Suspense fallback={<SpinnerLoading />}>
            <Profile />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/cart',
    element: (
      <Suspense fallback={<SpinnerLoading />}>
        <Cart />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<SpinnerLoading />}>
        <NotFound />
      </Suspense>
    )
  }
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />
      <Routes key={location.pathname} location={location}>
        {routes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children &&
              children.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
          </Route>
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
