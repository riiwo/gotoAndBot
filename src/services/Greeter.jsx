import React from 'react';

import { sample } from 'lodash';

const possibleInputs = ['Hello', 'Hi']
const possibleAnswers = ['Hello!', 'What\'s up!', 'Hi!'];

export const Greetable = ({ input }) => {
  const pattern = "^" + possibleInputs.join('|');
  return !!input.match(new RegExp(pattern, 'i'));
}

export const Greet = () => {
  return sample(possibleAnswers);
}

