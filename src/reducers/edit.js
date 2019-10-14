// actions
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_CONTENT = 'CHANGE_CONTENT';

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

export const actionCreatos = {
  changeTitle,
  changeContent,
};

// initial state
let id = localStorage.getItem('list') ? localStorage.getItem('list').length : 0;

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
      };
    }
    case CHANGE_CONTENT: {
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
