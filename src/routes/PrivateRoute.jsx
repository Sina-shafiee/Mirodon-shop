import { Navigate, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  const user = useAuth();

  return user ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
