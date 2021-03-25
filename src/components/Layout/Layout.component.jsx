import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from 'utils/ProtectedRoute';
import Header from 'components/Header';
import NotFound from 'pages/NotFound';
import HomePage from 'pages/Home';
import FavoritesPage from 'pages/Favorites';
import { StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <StyledMain>
      <Header />
      <Switch>
        <ProtectedRoute component={FavoritesPage} path="/favorites" exact />
        <ProtectedRoute component={FavoritesPage} path="/favorites/:videoId" exact />
        <Route component={HomePage} path="/home" exact />
        <Route component={HomePage} path="/home/:videoId" exact />
        <Redirect from="/" to="/home" exact />
        <Route component={NotFound} />
      </Switch>
    </StyledMain>
  );
};

export default Layout;
