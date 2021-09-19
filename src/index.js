import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthContextProvider } from './context/auth-context';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById('root')
);
