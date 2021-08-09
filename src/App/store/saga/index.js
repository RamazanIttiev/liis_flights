import { all } from 'redux-saga/effects';
import { favouritesWatcher } from './favSaga';

function* rootWatcher() {
  yield all([favouritesWatcher()]);
}

export default rootWatcher;
