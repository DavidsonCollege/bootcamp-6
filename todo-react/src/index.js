import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import './index.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk'
import reducer from "./reducer"

const store = createStore(reducer,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root'));
