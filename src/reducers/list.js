// actions
export const GET_MEMO_LIST = 'GET_MEMO_LIST';
export const ADD_MEMO = 'ADD_MEMO';

// action creators
const getMemoList = () => {
  return {
    type: GET_MEMO_LIST,
  };
};
const addMemo = (memo) => {
  return {
    type: ADD_MEMO,
    payload: {
      memo,
    },
  };
};

export const actionCreators = {
  getMemoList,
  addMemo,
};

// initial state

const initialState = {
  list: [],
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMO_LIST: {
      return {
        ...state,
      };
    }
    case ADD_MEMO: {
      console.log('confirm');
      return {
        list: [...state.list, action.payload.memo],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
