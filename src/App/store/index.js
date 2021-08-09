import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favourites from './reducers/favourites';
import slides from './reducers/slides';
import rootWatcher from './saga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  favourites,
  slides,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootWatcher);

export default store;
