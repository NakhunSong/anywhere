// lib
import { getItem } from 'lib/utils/listLocalStorage';

// actions
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const SUBMIT_MEMO = 'SUBMIT_MEMO';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';

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

const submitMemo = (id) => ({
  type: SUBMIT_MEMO,
  payload: {
    id,
  },
});

export const actionCreators = {
  changeTitle,
  changeContent,
  submitMemo,
};

// initial state
const getlist = getItem('list');
const id = getlist.length > 0 ? getlist[getlist.length - 1].id + 1 : 0;

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
        id: action.payload.id,
        title: '',
        content: '',
      };
    }
    case SUBMIT_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
