import { all, takeLatest, call, put } from 'redux-saga/effects';
import { GET_MEMO_LIST, GET_MEMO_LIST_SUCCESS } from 'reducers/list';
import { RESET_EDIT } from 'reducers/edit';
import { getItem, getNextId } from 'lib/utils/listLocalStorage';

/**
 * Get memo list
 */
function getMemoListAPI() {
  return getItem('list');
}
function* getMemoList() {
  const result = yield call(getMemoListAPI);
  const id = getNextId('list');
  try {
    yield put({
      type: GET_MEMO_LIST_SUCCESS,
      payload: result,
    });
    yield put({
      type: RESET_EDIT,
      payload: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
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
