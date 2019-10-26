import { all, takeLatest, call, put } from 'redux-saga/effects';
import { GET_MEMO_LIST, GET_MEMO_LIST_SUCCESS, GET_MEMO_LIST_FAILURE } from 'reducers/list';
import { getItem } from 'lib/utils/listLocalStorage';

function getMemoListAPI() {
  return getItem('list');
}
function* getMemoList() {
  const result = yield call(getMemoListAPI);
  try {
    yield put({
      type: GET_MEMO_LIST_SUCCESS,
      payload: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: GET_MEMO_LIST_FAILURE,
    });
  }
}
function* watchGetMemoList() {
  yield takeLatest(GET_MEMO_LIST, getMemoList);
}

export default function* listSaga() {
  yield all([
    watchGetMemoList(),
  ]);
}
