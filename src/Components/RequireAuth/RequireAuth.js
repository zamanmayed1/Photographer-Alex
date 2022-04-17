import React, { children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';

const RequireAuth = ({children}) => {
          let location = useLocation();
          const [user] = useAuthState(auth)
          if (!user?.email) {
                 
                    return <Navigate to="/login" state={{ from: location }} replace />;
                  }

          return children
};

export default RequireAuth;