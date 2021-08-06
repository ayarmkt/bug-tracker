import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AuthContextProvider } from './store/auth-context';
// import { Provider } from 'react-redux';
// import store from './Controllers/store/index';
// import { AuthContextProvider } from './Controllers/store/auth-slice';

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
