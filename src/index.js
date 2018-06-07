import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'


import reducer from './reducers'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    reducer,
    form: formReducer
});

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App/>
    </Provider>,

    document.getElementById('root'));

createStore(rootReducer);
