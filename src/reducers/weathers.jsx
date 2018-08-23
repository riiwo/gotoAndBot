import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  weatherReports: {}
};

export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case types.WEATHER_STARTED: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.WEATHER_FINISHED: {
      let newWeatherReports = Object.assign({}, state.weatherReports)
      newWeatherReports[action.city] = action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        weatherReports: newWeatherReports
      };
    }
    case types.WEATHER_FAILED: {
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
