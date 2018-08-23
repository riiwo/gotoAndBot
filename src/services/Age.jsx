import { sample } from 'lodash';
import { stringMatcher } from './Matchers';
import moment from 'moment';

const possibleInputs = ['old', 'age']

export function ageAble({ input }) {
  return stringMatcher(input, possibleInputs).length > 0
}

export function age() {
  return "I was made " + moment("20180822", "YYYYMMDD").fromNow();
}

