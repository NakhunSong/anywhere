import { combineReducers } from 'redux';
import { reducer as edit } from './edit';
import { reducer as list } from './list';
import { reducer as memo } from './memo';

const rootReducer = combineReducers({
  edit,
  list,
  memo,
});

export default rootReducer;
