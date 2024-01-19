// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { render } from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = document.getElementById('root'); // <- This is the correct method call for React version 17
// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   root
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

