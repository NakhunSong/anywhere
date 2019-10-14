import { combineReducers } from 'redux';
import { reducer as edit } from './edit';

const rootReducer = combineReducers({
  edit,
});

export default rootReducer;
