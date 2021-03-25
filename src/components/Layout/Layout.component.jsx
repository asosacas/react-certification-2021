import React from 'react';

import Header from 'components/Header';
import HomePage from 'pages/Home';
import { StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <StyledMain>
      <Header />
      <HomePage />
    </StyledMain>
  );
};

export default Layout;
