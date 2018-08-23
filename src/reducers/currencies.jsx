import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  conversionRates: {}
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
      const { fromCurrency, toCurrency, response } = action;
      const rate = response[`${fromCurrency}_${toCurrency}`];
      let newConversionRates = Object.assign({}, state.conversionRates);
      if (rate && rate > 0) {
        newConversionRates[fromCurrency] = { ...newConversionRates[fromCurrency] }
        newConversionRates[toCurrency] = { ...newConversionRates[fromCurrency] }
        newConversionRates[fromCurrency][toCurrency] = rate;
        newConversionRates[toCurrency][fromCurrency] = 1/rate;
      }
      return {
        ...state,
        error: false,
        fetching: false,
        conversionRates: newConversionRates
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
