import { put, takeEvery } from 'redux-saga/effects';

function* authWorker() {
  yield put({ type: 'IS_AUTH', payload });
}

export function* authWatcher() {
  yield takeEvery('SET_AUTH', authWorker);
}
