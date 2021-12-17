import { createAction } from '@reduxjs/toolkit';

const tickersRequest = createAction('tickers/fetchTickersRequest');
const tickersSuccess = createAction('tickers/fetchTickersSuccess');
const tickersError = createAction('tickers/fetchTickersError');

const setConnection = createAction('connection/setConnection');
const stopConnection = createAction('connection/stopConnection');

export {
  tickersRequest,
  tickersSuccess,
  tickersError,
  setConnection,
  stopConnection,
};