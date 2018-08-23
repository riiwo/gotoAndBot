import store from '../config/store';
import { ActionCreators } from '../actions';
import { stringMatcher, numberMatcher, nextMatcher } from './Matchers';
import { first } from 'lodash';

export function weatherAble({ input }) {
  return stringMatcher(input, ['weather']).length > 0 && nextMatcher(input, ['in']).length > 0
};

export function getWeather({ input }, timestamp) {
  const city = first(nextMatcher(input, ['in']));
  return new Promise((resolve) => resolve(
    store.dispatch(ActionCreators.weather(city))
  )).then(() => {
    const { error, weatherReports } = store.getState().weathers;
    if (error) {
      store.dispatch(ActionCreators.updateMessage(
        timestamp,
        "Seems that weather api is down or city is not found... Sorry ☹")
      );
    } else {
      const { main: { temp, humidity}, wind: { speed }, weather, name } = weatherReports[city];
      store.dispatch(
        ActionCreators.updateMessage(
          timestamp,
          "Weather in " + name + ": " + first(weather).main + ". " +
          " Temperature is " + temp + " degrees Celcius. Humidity is " + humidity + "% and wind blows " + speed + "m/s"
        )
      );
    }
  });
};

