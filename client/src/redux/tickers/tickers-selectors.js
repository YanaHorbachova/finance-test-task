const getTickers = state => state.tickers.fetchedTickers;
const getError = state => state.tickers.error;

export default { getTickers, getError };