import React from 'react';
import ReactDOM from 'react-dom';
import Bot from './views/Bot.jsx';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import store from './config/store';

library.add(faChevronRight);

ReactDOM.render(
  <Provider store={ store }>
    <Bot />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
