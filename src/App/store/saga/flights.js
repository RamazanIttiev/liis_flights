import { put, takeEvery } from 'redux-saga/effects';

function* flightsWorker(data) {
  if (data.payload !== undefined || data.payload.length !== 0) {
    yield put({ type: 'FLIGHTS', payload: data.payload });
  } else yield put({ type: 'FLIGHTS', payload: [] });
}

export function* flightsWatcher() {
  yield takeEvery('SET_FLIGHTS', flightsWorker);
}
