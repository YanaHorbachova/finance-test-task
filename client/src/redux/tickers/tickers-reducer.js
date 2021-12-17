import { createReducer } from '@reduxjs/toolkit';
import { tickersSuccess, tickersError, stopConnection } from './tickers-actions';

const initialTickersState = {
  prevTickers: [],
  currentTickers: [],
};

const fetchedTickers = createReducer(initialTickersState, {
  [tickersSuccess]: (state, { payload }) => ({
    prevTickers: state.currentTickers,
    currentTickers: payload,
  }),
});

const error = createReducer(null, {
  [tickersError]: (_, { payload }) => payload,

  [tickersSuccess]: () => null,});

const connectionReducer = createReducer(false, {
  [tickersSuccess]: (_, { payload }) => Boolean(payload),
  [stopConnection]: (_, __) => false,
});

const reducers = {
  fetchedTickers,
  error,
  connectionReducer,
};
export default reducers;