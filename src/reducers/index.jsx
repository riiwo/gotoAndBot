import { combineReducers } from 'redux';

import currencies from './currencies';
import messages from './messages';
import weathers from './weathers';

export default combineReducers({
  currencies, messages, weathers
});
