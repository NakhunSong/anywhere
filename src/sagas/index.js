import { all, call } from 'redux-saga/effects';

import edit from './edit';
import list from './list';
import memo from './memo';

export default function* rootSaga() {
  yield all([
    call(edit),
    call(list),
    call(memo),
  ]);
}
