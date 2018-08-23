import { stringMatcher } from './Matchers';
import ct from 'countries-and-timezones';
import moment from 'moment-timezone';
import { map, forEach, first, last } from 'lodash';

const timeStrings = ['time', 'moment', 'clock'];
const countries = {};
const countryNames = [];

forEach(ct.raw.countries, (country) => {
  countries[country.name] = country.id;
  countryNames.push(country.name);
});

export function timezonable({ input }) {
  return stringMatcher(input, timeStrings).length > 0
}

export function timezone({ input }) {
  const countryMatches = stringMatcher(input, countryNames);

  if (countryMatches.length > 0) {
    const countryName = first(countryMatches);
    const timezones = map(ct.getTimezonesForCountry(countries[countryName]), (timezone) => timezone.name);
    if (timezones.length === 1) {
      return "It is " + correctedTime(first(timezones)) + " in " + countryName + ".";
    } else {
      let placeString = '';
      forEach(timezones, (timezone) => {
        placeString += correctedTime(timezone) + ' in ' + last(timezone.split('/')).replace('_', ' ') + '; '
      });
      return "It is " + placeString;
    }
  } else {
    return "It is " + new Date().toLocaleTimeString() + " right now.";
  }
}

function correctedTime(timezone) {
  return moment().tz(timezone).format('HH:mm:ss');
}
