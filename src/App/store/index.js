import { combineReducers, createStore } from 'redux';
import favourites from './reducers/favourites';

export const rootReducer = combineReducers({
  favourites,
});

const store = createStore(rootReducer);

export default store;
