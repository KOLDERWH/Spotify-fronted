import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { HashRouter } from 'react-router-dom';

import "@/assets/css/index.css"
import App from './App';
import { Provider } from 'react-redux';
import store from '@/store';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    {/* <React.StrictMode> */}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </React.StrictMode> */}
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
