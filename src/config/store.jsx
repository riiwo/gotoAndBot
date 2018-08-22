import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

function configureStore(initialState) {
  let middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  const enhancer = compose(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

export default store;
