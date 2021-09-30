import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favourites from './reducers/favourites';
import photos from './reducers/photos';
import hotels from './reducers/hotels';
import filters from './reducers/filters';
import rootWatcher from './saga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  favourites,
  photos,
  hotels,
  filters,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootWatcher);

export default store;
