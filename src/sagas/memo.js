import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_MEMO, GET_MEMO_SUCCESS, GET_MEMO_FAILURE } from 'reducers/memo';
import { getItem } from 'lib/utils/listLocalStorage';

function getMemoAPI(memoId) {
  const list = getItem('list');
  const memoIndex = list.findIndex((l) => l.id === Number(memoId, 10));
  return list[memoIndex];
}
function* getMemo(action) {
  const result = yield call(getMemoAPI, action.payload.id);
  try {
    yield put({
      type: GET_MEMO_SUCCESS,
      payload: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_MEMO_FAILURE,
    });
  }
}
function* watchGetMemo() {
  yield takeLatest(GET_MEMO, getMemo);
}

export default function* memoSaga() {
  yield all([
    watchGetMemo(),
  ]);
}
