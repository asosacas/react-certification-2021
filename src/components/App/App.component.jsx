import React from 'react';

import { ThemeProvider } from 'styled-components';
import HomePage from 'pages/Home';
import Layout from 'components/Layout';
import themes from 'themes';

const App = () => (
  <ThemeProvider theme={themes.base}>
    <Layout>
      <HomePage />
    </Layout>
  </ThemeProvider>
);

export default App;
