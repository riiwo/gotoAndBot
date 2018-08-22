import React from 'react';
import { Greetable, Greet } from './Greeter';
import { CurrencyConvertable } from './Currency';

const Receiver = (props) => {
  if (Greetable(props)) {
    return Greet();
  } else if (CurrencyConvertable(props)) {
    return "Needs implementation";
  } else {
    return "I don't know the answer to that";
  }
}

export default Receiver;
