// actions
export const GET_MEMO = 'memo/GET_MEMO';
export const RESET_MEMO = 'memo/RESET_MEMO';

// action creators
const getMemo = (memo) => {
  return {
    type: GET_MEMO,
    payload: {
      data: memo,
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
      const { data } = action.payload;
      if (data) {
        return {
          id: data.id,
          title: data.title,
          content: data.content,
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
