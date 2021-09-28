import { put, takeEvery } from 'redux-saga/effects';

function* filtersWorker({ payload }) {
  yield put({ type: 'ADD_FAVOURITE', payload });
}

export function* filtersWatcher() {
  yield takeEvery('SET_FILTERS', filtersWorker);
}
