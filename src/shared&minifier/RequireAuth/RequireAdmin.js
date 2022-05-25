import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

import useAllUser from '../../hooks/UseAllUser';
import Loading from '../Loading/Loading';

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const { isLoading, allUser} = useAllUser(user);
  const currentUser = allUser.find(u => u?.email === user?.email);
  let location = useLocation();
  if (loading || isLoading) {
    return <Loading></Loading>
  }
  if (!user || !(currentUser.role === 'admin')) {
    signOut(auth)
    localStorage.removeItem('accessToken')
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;