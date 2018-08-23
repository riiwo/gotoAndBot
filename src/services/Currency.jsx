import store from '../config/store';
import { ActionCreators } from '../actions';
import { first, round } from 'lodash';

import { stringMatcher, numberMatcher } from './Matchers';

const supportedCurrencies = [
  'ALL', 'XCD', 'EUR', 'BBD', 'BTN', 'BND', 'XAF', 'CUP', 'USD', 'FKP', 'GIP', 'HUF', 'IRR', 'JMD', 'AUD', 'LAK', 'LYD',
  'MKD', 'XOF', 'NZD', 'OMR', 'PGK', 'RWF', 'WST', 'RSD', 'SEK', 'TZS', 'AMD', 'BSD', 'BAM', 'CVE', 'CNY', 'CRC', 'CZK',
  'ERN', 'GEL', 'HTG', 'INR', 'JOD', 'KRW', 'LBP', 'MWK', 'MRO', 'MZN', 'ANG', 'PEN', 'QAR', 'STD', 'SLL', 'SOS', 'SDG',
  'SYP', 'AOA', 'AWG', 'BHD', 'BZD', 'BWP', 'BIF', 'KYD', 'COP', 'DKK', 'GTQ', 'HNL', 'IDR', 'ILS', 'KZT', 'KWD', 'LSL',
  'MYR', 'MUR', 'MNT', 'MMK', 'NGN', 'PAB', 'PHP', 'RON', 'SAR', 'SGD', 'ZAR', 'SRD', 'TWD', 'TOP', 'VEF', 'DZD', 'ARS',
  'AZN', 'BYR', 'BOB', 'BGN', 'CAD', 'CLP', 'CDF', 'DOP', 'FJD', 'GMD', 'GYD', 'ISK', 'IQD', 'JPY', 'KPW', 'LVL', 'CHF',
  'MGA', 'MDL', 'MAD', 'NPR', 'NIO', 'PKR', 'PYG', 'SHP', 'SCR', 'SBD', 'LKR', 'THB', 'TRY', 'AED', 'VUV', 'YER', 'AFN',
  'BDT', 'BRL', 'KHR', 'KMF', 'HRK', 'DJF', 'EGP', 'ETB', 'XPF', 'GHS', 'GNF', 'HKD', 'XDR', 'KES', 'KGS', 'LRD', 'MOP',
  'MVR', 'MXN', 'NAD', 'NOK', 'PLN', 'RUB', 'SZL', 'TJS', 'TTD', 'UGX', 'UYU', 'VND', 'TND', 'UAH', 'UZS', 'TMT', 'GBP',
  'ZMW', 'BTC', 'BYN'
];

export function currencyConvertable({ input }) {
  const matches = stringMatcher(input, supportedCurrencies);
  return matches.length >= 2
};

export function converCurrency({ input }, timestamp) {
  const { error, conversionRates } = store.getState().currencies;
  const matches = stringMatcher(input, supportedCurrencies);
  const strings = input.split(first(matches), 2);
  let amount = 1;
  let fromIndex = 0;
  strings.forEach((substring, index) => {
    const numberMatches = numberMatcher(substring);
    if (numberMatches.length > 0) {
      amount = first(numberMatches)
      fromIndex = index;
      return false;
    }
  });
  const fromCurrency = matches[fromIndex].toUpperCase();
  const toCurrency = matches[fromIndex === 1 ? 0 : 1].toUpperCase();
  const currentConersionRate = conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency];
  if (currentConersionRate) {
    return store.dispatch(
      ActionCreators.updateMessage(
        timestamp,
        message(amount, fromCurrency, toCurrency, currentConersionRate)
      )
    );
  }
  return new Promise((resolve) => resolve(
    store.dispatch(ActionCreators.convert(amount, fromCurrency, toCurrency))
  )).then(() => {
    const { conversionRates } = store.getState().currencies;
    const currentConersionRate = conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency];
    if (error && !currentConersionRate) {
      store.dispatch(ActionCreators.updateMessage(timestamp, "Seems that conversion api is down... Sorry ☹"));
    } else {
      store.dispatch(
        ActionCreators.updateMessage(
          timestamp,
          message(amount, fromCurrency, toCurrency, currentConersionRate)
        )
      );
    }
  });
};

function message(amount, fromCurrency, toCurrency, rate) {
  return `${amount} ${fromCurrency} is ${round(rate * amount, 5)} ${toCurrency} at the moment`;
}


