import { put, takeEvery } from 'redux-saga/effects';

function* flightsWorker(data) {
  if (data.payload !== undefined) {
    yield put({ type: 'FLIGHTS', payload: data.payload });
  }
}

export function* flightsWatcher() {
  yield takeEvery('SET_FLIGHTS', flightsWorker);
}
