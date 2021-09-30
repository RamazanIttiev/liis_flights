import { put, takeEvery } from 'redux-saga/effects';

function* favouritesWorker({ payload }) {
  yield put({ type: 'ADD_FAVOURITE', payload });
}

function* favouritesWorkerDelete({ payload }) {
  yield put({ type: 'REMOVE_FAVOURITE', payload });
}

function* sortWorkerDelete({ payload }) {
  yield put({ type: 'SORT_FAVOURITE', payload });
}

export function* favouritesWatcher() {
  yield takeEvery('ADD_TO_FAVOURITE', favouritesWorker);
  yield takeEvery('REMOVE__FROM_FAVOURITE', favouritesWorkerDelete);
  yield takeEvery('SORT', sortWorkerDelete);
}
