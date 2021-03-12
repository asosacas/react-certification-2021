import React, { useState } from 'react';

import Header from 'components/Header';
import HomePage from 'pages/Home';
import { StyledMain } from './Layout.styled';

const Layout = () => {
  const [search, setSearch] = useState();
  return (
    <StyledMain>
      <Header setSearch={setSearch} />
      <HomePage search={search} />
    </StyledMain>
  );
};

export default Layout;
