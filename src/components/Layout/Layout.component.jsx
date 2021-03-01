import React from 'react';

import Header from 'components/Header';
import { StyledMain } from './Layout.styled';

const Layout = ({ children }) => (
  <StyledMain>
    <Header />
    {children}
  </StyledMain>
);

export default Layout;
