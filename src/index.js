import React from 'react';
import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import { GlobalStateProvider } from './providers/GlobalStateProvider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT}
      redirectUri={`${window.location.origin}`}
    >
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
