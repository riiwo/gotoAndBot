import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  messages: {
  }
};

export default function messageReducer(state = initialState, action) {
  switch(action.type) {
    case types.MESSAGE_STARTED: {
      let messages = Object.assign({}, state.messages);
      messages[action.timestamp] = {
        recipient: action.from,
        message: action.message,
        timestamp: action.timestamp
      };
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.MESSAGE_FINISHED: {
      let messages = Object.assign({}, state.messages);
      messages[action.timestamp] = {
        recipient: action.from,
        message: action.message,
        timestamp: action.timestamp
      };
      return {
        ...state,
        error: false,
        fetching: false,
        messages
      };
    }
    case types.MESSAGE_UPDATED: {
      let messages = Object.assign({}, state.messages);
      messages[action.timestamp] = {
        ...messages[action.timestamp],
        message: action.message
      };
      return {
        ...state,
        error: false,
        fetching: false,
        messages
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
