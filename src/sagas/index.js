import { all, call } from 'redux-saga/effects';

import list from './list';
import memo from './memo';

export default function* rootSaga() {
  yield all([
    call(list),
    call(memo),
  ]);
}
