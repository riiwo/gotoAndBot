import { sample } from 'lodash';
import { stringMatcher } from './Matchers';

const possibleInputs = ['Hello', 'Hi']
const possibleAnswers = ['Hello!', 'What\'s up!', 'Hi!', 'How do you do!', 'Howdy'];

export function greetable({ input }) {
  return stringMatcher(input, possibleInputs).length > 0
}

export function greet() {
  return sample(possibleAnswers);
}

