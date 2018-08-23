import { stringMatcher } from './Matchers';
import ct from 'countries-and-timezones';
import moment from 'moment-timezone';
import { map, forEach, first, last } from 'lodash';

const timeStrings = ['time', 'moment', 'clock'];
const negativeCurrentTimeStrings = ['in'];
const countries = {};
const countryNames = [];
const timezones = {};
const timezoneNames = [];

forEach(ct.raw.countries, (country) => {
  countries[country.name] = country.id;
  countryNames.push(country.name);
});
forEach(ct.raw.timezones, (timezone) => {
  const name = timezoneNameHumanize(timezone);
  timezones[name.toLowerCase()] = timezone;
  timezoneNames.push(name);
});

export function timezonable({ input }) {
  return stringMatcher(input, timeStrings).length > 0
}

export function timezone({ input }) {
  const countryMatches = stringMatcher(input, countryNames);
  const timezoneMatches = stringMatcher(input, timezoneNames);
  if (countryMatches.length > 0) {
    const countryName = first(countryMatches);
    return test(ct.getTimezonesForCountry(countries[countryName]));
  } else if (timezoneMatches.length > 0) {
    const tzMatches = map(timezoneMatches, (match) => timezones[match.toLowerCase()])
    console.log(tzMatches);
    return test(tzMatches);
  } else if (stringMatcher(input, negativeCurrentTimeStrings).length == 0) {
    return "It is <b>" + new Date().toLocaleTimeString() + "</b> right now.";
  } else {
    return "I don't know the time there.";
  }
}

function correctedTime(timezone) {
  return moment().tz(timezone.name).format('HH:mm:ss');
}

function test(timezones) {
  if (timezones.length === 1) {
    const timezone = first(timezones);
    return "It is <b>" + correctedTime(timezone) + "</b> in " + timezoneNameHumanize(timezone) + ".";
  } else {
    let placeString = '';
    forEach(timezones, (timezone) => {
      placeString += "<b>" + correctedTime(timezone) + '</b> in ' + timezoneNameHumanize(timezone) + '<br>'
    });
    return "It is <br>" + placeString;
  }
}

function timezoneNameHumanize(timezone) {
  return last(timezone.name.split('/')).replace('_', ' ');
}
