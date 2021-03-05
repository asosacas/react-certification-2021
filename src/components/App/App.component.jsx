import React from 'react';

import { ThemeProvider } from 'styled-components';
import Layout from 'components/Layout';
import themes from 'themes';

const App = () => (
  <ThemeProvider theme={themes.base}>
    <Layout />
  </ThemeProvider>
);

export default App;
