import { put, takeEvery } from 'redux-saga/effects';

function* favouritesWorker(id) {
  yield put({ type: 'IS_FAVOURITE', payload: id });
  console.log(id);
}

export function* favouritesWatcher() {
  yield takeEvery('SET_FAV', favouritesWorker);
}
