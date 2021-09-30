import { put, takeEvery } from 'redux-saga/effects';

function* filtersWorker({ payload }) {
  yield put({ type: 'SET_FILTERS', payload });
}

export function* filtersWatcher() {
  yield takeEvery('SET_FILTERS_TO_STORE', filtersWorker);
}
