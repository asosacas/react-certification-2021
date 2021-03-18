import React from 'react';
import { useGlobalState } from 'providers/GlobalStateProvider';

import { ThemeProvider } from 'styled-components';
import Layout from 'components/Layout';
import themes from 'themes';

const App = () => {
  const {
    state: { theme },
  } = useGlobalState();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
