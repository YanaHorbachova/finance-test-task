import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducers from './tickers/tickers-reducer';

const store = configureStore({
  reducer: combineReducers({
    tickers: reducers.fetchedTickers,
    isConnected: reducers.connectionReducer,
  }),
});

export default store;