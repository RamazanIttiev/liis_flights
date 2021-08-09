import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favourites from './reducers/favourites';
import { favouritesWatcher } from './saga/favSaga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  favourites,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(favouritesWatcher);

export default store;
