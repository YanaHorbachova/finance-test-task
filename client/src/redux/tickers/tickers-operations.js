import socket from '../../helpers/socket';
import {
  tickersRequest,
  tickersSuccess,
  tickersError,
  setConnection,
} from './tickers-actions';

const fetchTickers = () => async dispatch => {
  dispatch(tickersRequest());

  socket.emit('start');
  socket.on('ticker', tickers =>
    dispatch(tickersSuccess(tickers)),
  );

  socket.on('connect_error', () =>
    dispatch(tickersError('connect_error')),
  );
  socket.on('connect_failed', () =>
    dispatch(tickersError('connect_failed')),
  );
  socket.on('disconnect', () =>
    dispatch(tickersError('disconnect')),
  );
}

 const connectionOperation = () => {
  const actionConnect = async dispatch => {
    dispatch(setConnection());
  };
  return actionConnect;
};

export { fetchTickers, connectionOperation };