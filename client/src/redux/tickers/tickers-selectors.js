const getTickers = state => state.tickers;
const getError = state => state.tickers.error;
const connectionSelector = state => state.isConnected;

export { getTickers, getError, connectionSelector };