// actions
export const GET_MEMO = 'memo/GET_MEMO';
export const GET_MEMO_SUCCESS = 'memo/GET_MEMO_SUCCESS';
export const RESET_MEMO = 'memo/RESET_MEMO';

// action creators
const getMemo = (id) => {
  return {
    type: GET_MEMO,
    payload: {
      id,
    },
  };
};
const resetMemo = () => {
  return {
    type: RESET_MEMO,
  };
};

export const actionCreators = {
  getMemo,
  resetMemo,
};

// initial state
const initialState = {
  id: 0,
  title: '',
  content: '',
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMO: {
      return {
        ...state,
      };
    }
    case GET_MEMO_SUCCESS: {
      const { payload } = action;
      if (payload) {
        return {
          id: payload.id,
          title: payload.title,
          content: payload.content,
        };
      }
      return {
        ...state,
      };
    }
    case RESET_MEMO: {
      return {
        id: 0,
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
