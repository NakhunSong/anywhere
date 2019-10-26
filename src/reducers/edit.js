// actions
export const CHANGE_TITLE = 'edit/CHANGE_TITLE';
export const CHANGE_CONTENT = 'edit/CHANGE_CONTENT';
export const RESET_EDIT = 'edit/RESET_EDIT';
export const GET_MEMO = 'edit/GET_MEMO';
export const ADD_MEMO = 'edit/ADD_MEMO';
export const EDIT_MEMO = 'edit/EDIT_MEMO';
export const REMOVE_MEMO = 'edit/REMOVE_MEMO';

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

const resetEdit = (id) => ({
  type: RESET_EDIT,
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

const addMemo = (memo) => ({
  type: ADD_MEMO,
  payload: {
    memo,
  },
});

const editMemo = (memo) => ({
  type: EDIT_MEMO,
  payload: {
    memo,
  },
});

const removeMemo = (id) => ({
  type: REMOVE_MEMO,
  payload: {
    id,
  },
});

export const actionCreators = {
  changeTitle,
  changeContent,
  resetEdit,
  getMemo,
  addMemo,
  editMemo,
  removeMemo,
};

// initial state

const initialState = {
  id: 0,
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
    case RESET_EDIT: {
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
    case ADD_MEMO: {
      return {
        ...state,
      };
    }
    case EDIT_MEMO: {
      return {
        ...state,
      };
    }
    case REMOVE_MEMO: {
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
