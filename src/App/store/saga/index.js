import { all } from 'redux-saga/effects';
import { favouritesWatcher } from './favourites';
import { filtersWatcher } from './filters';
import { hotelsWatcher } from './hotels';

function* rootWatcher() {
  yield all([favouritesWatcher(), hotelsWatcher(), filtersWatcher()]);
}

export default rootWatcher;
