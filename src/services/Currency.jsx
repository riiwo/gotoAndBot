import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

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

export const CurrencyConvertable = ({ input }) => {
  const pattern = "^" + supportedCurrencies.join('|');
  let matches = input.match(new RegExp(pattern, 'gi'));
  console.log(matches.count);
  return matches && matches.count >= 2
};

const mapStateToProps = (state) => {
  return state.currencies;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onConvert: (amount, fromCurrency, toCurrency) => {
      dispatch(ActionCreators.convert(amount, fromCurrency, toCurrency))
    }
  };
};

export const ConverCurrency = connect(mapStateToProps, mapDispatchToProps)(({ input }) => {
  let amount = 1;
  let fromCurrency = 'USD'
  let toCurrency = 'EUR'
  const pattern = "([\d\.]+)?.+?(?=(" + supportedCurrencies.join('|') + "|[\d\.]+))"
  return this.props.onConvert(amount, fromCurrency, toCurrency);
});
