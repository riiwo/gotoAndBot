import * as CurrencyActions from './currency';
import * as MessageActions from './message';
import * as WeathereActions from './weather';

export const ActionCreators = Object.assign({},
  CurrencyActions, MessageActions, WeathereActions
);
