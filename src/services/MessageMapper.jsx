import { greetable, greet } from './Greeter';
import { currencyConvertable, converCurrency } from './Currency';

import store from '../config/store';
import { ActionCreators } from '../actions';
import { calculatable, calculate } from './Claculate';
import { timezonable, timezone } from './Timezone';
import { weatherAble, getWeather } from './Weather';
import { ageAble, age } from './Age';

export default function messageMapper(props) {
  return setTimeout(() => store.dispatch(ActionCreators.sendMessage('bot', answer(props), props)), 500);
}

function answer(props) {
  if (calculatable(props)) {
    return calculate(props);
  } else if (weatherAble(props)) {
    return getWeather;
  } else if (timezonable(props)) {
    return timezone(props);
  } else if (greetable(props)) {
    return greet();
  } else if (currencyConvertable(props)) {
    return converCurrency;
  } else if (ageAble(props)) {
    return age();
  } else if(props.input === 'vaal') {
    return ('<br><br><br><br> &nbsp; o____________________o')
  } else {
    return "I don't know how to answer to that. ☹";
  }
}
