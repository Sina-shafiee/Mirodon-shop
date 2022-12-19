import React from 'react';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const userData = useSelector((state) => state.user);

  return userData.user;
};

export default useAuth;
