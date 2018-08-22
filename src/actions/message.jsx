import * as types from '../config/types';

export default function sendMessage(from, message, action) {
  return (dispatch, _getState) => {
    dispatch(messageStarted());
    return new Promise((resolve) => resolve(
      action
    )).then(() => {
      dispatch(messageFinished(from, message));
    }).catch((ex) => {
      dispatch(messageFailed());
      console.log(ex);
    });
  };
}

function messageStarted() {
  return {
    type: types.MESSAGE_STARTED,
  };
}

function messageFinished(response, amount, fromCurrency, toCurrency) {
  return {
    type: types.MESSAGE_FINISHED,
    response,
    amount,
    fromCurrency,
    toCurrency
  };
}

function messageFailed() {
  return {
    type: types.MESSAGE_FAILED
  };
}
