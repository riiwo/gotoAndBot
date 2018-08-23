import * as types from '../config/types';

export function sendMessage(from, actionOrMessage, props) {
  const timestamp = new Date().getTime();
  const isAction = typeof actionOrMessage === 'function';
  return (dispatch, _getState) => {
    dispatch(messageStarted(from, timestamp));
    return new Promise((resolve) => resolve(
      dispatch(messageFinished(from, !isAction && actionOrMessage, timestamp))
    )).then(() => {
      isAction && actionOrMessage(props, timestamp);
    }).catch((ex) => {
      dispatch(messageFailed());
      console.log(ex);
    });
  };
}

export function updateMessage(timestamp, message) {
  return {
    type:  types.MESSAGE_UPDATED,
    message,
    timestamp
  }
}

function messageStarted(from, timestamp) {
  return {
    type: types.MESSAGE_STARTED,
    from,
    timestamp
  };
}

function messageFinished(from, message, timestamp) {
  return {
    type: types.MESSAGE_FINISHED,
    from,
    message,
    timestamp
  };
}

function messageFailed() {
  return {
    type: types.MESSAGE_FAILED
  };
}
