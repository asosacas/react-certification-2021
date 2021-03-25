import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobalState } from 'providers/GlobalStateProvider';

const ProtectedRoute = ({ component: Component, ...routeProps }) => {
  const { isAuthenticated, isLoading } = useGlobalState();
  if (isLoading) {
    return null;
  }
  return (
    <Route
      {...routeProps}
      render={(props) => {
        return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
