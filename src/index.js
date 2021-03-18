import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { GlobalStateProvider } from './providers/GlobalStateProvider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
