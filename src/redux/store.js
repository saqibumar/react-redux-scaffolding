import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import {thunk} from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
  }
  else if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
  }
  else if (process.env.NODE_ENV === 'test') {
    console.log('Testing mode');
  }

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV,
});

export default store;
