import { numberMatcher, anyMatcher } from './Matchers';

export function calculatable({ input }) {
  const numberCount = numberMatcher(input).length;
  const amountOfOperators = anyMatcher(input, '-/*+').length;
  return numberCount >= 2 && numberCount - amountOfOperators == 1
}

export function calculate({ input }) {
  const cleanedInput = input.replace(/[^-()\d/*+.]/g, '')
  return cleanedInput + ' = ' + eval(cleanedInput);
}

