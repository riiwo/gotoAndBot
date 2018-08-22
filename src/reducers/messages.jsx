import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  messages: [
    {
      recipient: 'user',
      message: 'Hello',
      timestamp: 1534891872331
    },
    {
      recipient: 'bot',
      message: 'Hello there',
      timestamp: 1534891915199
    },
    {
      recipient: 'user',
      message: 'what up',
      timestamp: 1534891923225
    },
    {
      recipient: 'bot',
      message: 'not much',
      timestamp: 1534891932300
    }
  ]
};

export default function messageReducer(state = initialState, action) {
  switch(action.type) {
    case types.MESSAGE_STARTED: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.MESSAGE_FINISHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false
      };
    }
    case types.MESSAGE_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    default:
      return state;
  }
};
