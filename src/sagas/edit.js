import { all, put, call, takeLatest } from 'redux-saga/effects';
import { ADD_MEMO, RESET_EDIT, EDIT_MEMO, REMOVE_MEMO } from 'reducers/edit';
import { GET_MEMO, RESET_MEMO } from 'reducers/memo';
import { getItem, setItem, pushItem, getNextId } from 'lib/utils/listLocalStorage';

/**
 * Add memo
 * @param {object} memo
 */
function addMemoAPI(memo) {
  pushItem('list', memo);
  return memo;
}
function* addMemo(action) {
  try {
    const result = yield call(addMemoAPI, action.payload.memo);
    const id = result.id + 1;
    yield put({
      type: GET_MEMO,
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
function* watchAddMemo() {
  yield takeLatest(ADD_MEMO, addMemo);
}

/**
 * Edit memo
 * @param {object} memo
 */
function editMemoAPI(memo) {
  const newList = getItem('list').map((m) => {
    if (m.id === memo.id) {
      return memo;
    }
    return m;
  });
  setItem('list', newList);
  return memo;
}
function* editMemo(action) {
  const result = yield call(editMemoAPI, action.payload.memo);
  const id = result.id + 1;
  try {
    yield put({
      type: GET_MEMO,
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
function* watchEditMemo() {
  yield takeLatest(EDIT_MEMO, editMemo);
}

/**
 * Remove memo
 * @param {number} memoId
 */
function removeMemoAPI(memoId) {
  const list = getItem('list').filter((l) => l.id !== memoId);
  setItem('list', list);
}
function* removeMemo(action) {
  const id = getNextId('list');
  yield call(removeMemoAPI, action.payload.id);
  try {
    yield put({
      type: RESET_EDIT,
      payload: {
        id,
      },
    });
    yield put({
      type: RESET_MEMO,
    });
  } catch (e) {
    console.error(e);
  }
}
function* watchRemoveMemo() {
  yield takeLatest(REMOVE_MEMO, removeMemo);
}

export default function* editSaga() {
  yield all([
    watchAddMemo(),
    watchEditMemo(),
    watchRemoveMemo(),
  ]);
}
