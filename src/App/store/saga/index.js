import { all } from 'redux-saga/effects';
import { favouritesWatcher } from './favourites';
import { flightsWatcher } from './flights';

function* rootWatcher() {
  yield all([favouritesWatcher(), flightsWatcher()]);
}

export default rootWatcher;
