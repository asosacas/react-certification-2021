import React from 'react';
import { GlobalStateProvider } from 'providers/GlobalStateProvider';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';

export const ProviderWrapper = ({ children, ...props }) => {
  return (
    <Auth0Provider>
      <HashRouter>
        <GlobalStateProvider {...props}>{children}</GlobalStateProvider>;
      </HashRouter>
    </Auth0Provider>
  );
};

export const ProviderWithStateWrapper = ({ ...props }) => ({ children }) => {
  return <ProviderWrapper {...props}>{children}</ProviderWrapper>;
};
