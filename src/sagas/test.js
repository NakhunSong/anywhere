import { all, takeEvery, delay, put } from 'redux-saga/effects';
import { SUBMIT_MEMO, SUBMIT_SUCCESS } from 'reducers/edit';

function* clickSubmit() {
  yield delay(2000);
  yield put({
    type: SUBMIT_SUCCESS,
  });
}

function* watchClickSubmit() {
  yield takeEvery(SUBMIT_MEMO, clickSubmit);
}

export default function* testSaga() {
  yield all([
    watchClickSubmit(),
  ]);
}
