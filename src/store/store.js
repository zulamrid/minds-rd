import {compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import app from './app';

const reducer = combineReducers({
    Main: app,
})

const store = createStore(reducer, {},  applyMiddleware(thunk));

export default store;