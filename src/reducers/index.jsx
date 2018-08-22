import { combineReducers } from 'redux';

import currencies from './currencies';
import messages from './messages';

export default combineReducers({
  currencies, messages
});
