import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './routes/Home';
import NotFound from './routes/NotFound';
import ProductPage from './routes/ProductPage';
import ScrollToTop from './util/scrollToTop';
import SignIn from './routes/SignIn';
import Profile from './routes/Profile';
import PrivateRoute from './routes/PrivateRoute';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />

      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
