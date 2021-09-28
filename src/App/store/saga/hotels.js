import { put, takeEvery } from 'redux-saga/effects';

function* hotelsWorker(data) {
  if (data.payload !== undefined || data.payload.length !== 0) {
    yield put({ type: 'HOTELS', payload: data.payload });
  } else yield put({ type: 'HOTELS', payload: [] });
}

export function* hotelsWatcher() {
  yield takeEvery('SET_HOTELS', hotelsWorker);
}
