import * as types from '../config/types';
import Api from '../config/apis/currencyApi';

export function convert(amount, fromCurrency, toCurrency) {
  return (dispatch, getState) => {
    dispatch(convertStarted());
    return Api.get(`/convert`, { q: `${fromCurrency}_${toCurrency}`, compact: 'ultra' }).then(resp => {
      dispatch(convertFinished(resp, amount, fromCurrency, toCurrency));
    }).catch((ex) => {
      dispatch(convertFailed());
      console.log(ex);
    });
  };
}

function convertStarted() {
  return {
    type: types.CONVERT_STARTED,
  };
}

function convertFinished(response, amount, fromCurrency, toCurrency) {
  return {
    type: types.CONVERT_FINISHED,
    response,
    amount,
    fromCurrency,
    toCurrency
  };
}

function convertFailed() {
  return {
    type: types.CONVERT_FAILED
  };
}
