import { combineReducers } from 'redux';
import { reducer as edit } from './edit';
import { reducer as list } from './list';

const rootReducer = combineReducers({
  edit,
  list,
});

export default rootReducer;
