import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStore from './context/GlobalStore';

import App from './components/App';
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
      <App />
    </GlobalStore>
  </React.StrictMode>,
  document.getElementById('root'),
);
