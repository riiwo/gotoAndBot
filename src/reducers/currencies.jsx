import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  conversionRates: {
  }
};

export default function currencyReducer(state = initialState, action) {
  switch(action.type) {
    case types.CONVERT_STARTED: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.CONVERT_FINISHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false
      };
    }
    case types.CONVERT_FAILED: {
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
