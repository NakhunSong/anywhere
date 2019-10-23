// actions
export const GET_MEMO = 'GET_MEMO';
export const RESET_MEMO = 'RESET_MEMO';

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
