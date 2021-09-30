import { put, takeEvery } from 'redux-saga/effects';

function* hotelsWorker({ payload }) {
  yield put({ type: 'HOTELS', payload: payload });
}

export function* hotelsWatcher() {
  yield takeEvery('SET_HOTELS', hotelsWorker);
}
