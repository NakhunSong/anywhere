// lib
import { getNextId } from 'lib/utils/listLocalStorage';

// actions
export const CHANGE_TITLE = 'edit/CHANGE_TITLE';
export const CHANGE_CONTENT = 'edit/CHANGE_CONTENT';
export const RESET_MEMO = 'edit/RESET_MEMO';
export const GET_MEMO = 'edit/GET_MEMO';

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

const resetMemo = (id) => ({
  type: RESET_MEMO,
  payload: {
    id,
  },
});

const getMemo = (memo) => ({
  type: GET_MEMO,
  payload: {
    memo,
  },
});

export const actionCreators = {
  changeTitle,
  changeContent,
  resetMemo,
  getMemo,
};

// initial state
const id = getNextId('list');

const initialState = {
  id,
  title: '',
  content: '',
  isModify: false,
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
    case RESET_MEMO: {
      return {
        id: action.payload.id,
        title: '',
        content: '',
        isModify: false,
      };
    }
    case GET_MEMO: {
      return {
        id: action.payload.memo.id,
        title: action.payload.memo.title,
        content: action.payload.memo.content,
        isModify: action.payload.memo.isModify,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
