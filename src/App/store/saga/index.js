import { all } from 'redux-saga/effects';
import { authWatcher } from './auth';
import { favouritesWatcher } from './favSaga';

function* rootWatcher() {
  yield all([favouritesWatcher(), authWatcher()]);
}

export default rootWatcher;
