import * as types from '../config/types';
import Api from '../config/apis/weatherApi';

export function weather(city) {
  return (dispatch, getState) => {
    dispatch(weatherStarted());
    return Api.get(`/weather`, { q: city, APPID: 'b8dfdfda8199a01dbd0ea0b79c0193fc', units: 'metric' }).then(resp => {
      dispatch(weatherFinished(resp, city));
    }).catch((ex) => {
      dispatch(weatherFailed());
      console.log(ex);
    });
  };
}

function weatherStarted() {
  return {
    type: types.WEATHER_STARTED,
  };
}

function weatherFinished(response, city) {
  return {
    type: types.WEATHER_FINISHED,
    response,
    city
  };
}

function weatherFailed() {
  return {
    type: types.WEATHER_FAILED
  };
}
