import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Features/Redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
=======
import 'tailwindcss/tailwind.css';

import 'react-circular-progressbar/dist/styles.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
