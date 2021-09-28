import { all } from 'redux-saga/effects';
import { favouritesWatcher } from './favourites';
import { hotelsWatcher } from './hotels';

function* rootWatcher() {
  yield all([favouritesWatcher(), hotelsWatcher()]);
}

export default rootWatcher;
