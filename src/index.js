import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { searchRobots, requestRobots } from '../src/redux/reducers/reducers';
import 'tachyons';

// eslint-disable-next-line
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//* middleware is ordered, so the logger will be the last one to be called

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

