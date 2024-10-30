import { configureStore, compose, applyMiddleware  } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

const store = configureStore({
    reducer: {} 
}, compose(applyMiddleware(thunk)));

export default store;