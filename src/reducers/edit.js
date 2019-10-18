// lib
import { getItem } from 'lib/utils/listLocalStorage';

// actions
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const SUBMIT_MEMO = 'SUBMIT_MEMO';

// action creators
const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  payload: {
    title,
  },
});

const changeContent = (content) => ({
  type: CHANGE_CONTENT,
  payload: {
    content,
  },
});

const submitMemo = () => ({
  type: SUBMIT_MEMO,
});

export const actionCreators = {
  changeTitle,
  changeContent,
  submitMemo,
};

// initial state
let id = getItem('list').length;

const initialState = {
  id,
  title: '',
  content: '',
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE: {
      return {
        ...state,
        title: action.payload.title,
      };
    }
    case CHANGE_CONTENT: {
      return {
        ...state,
        content: action.payload.content,
      };
    }
    case SUBMIT_MEMO: {
      return {
        id: state.id + 1,
        title: '',
        content: '',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
