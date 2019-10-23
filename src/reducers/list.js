// actions
export const GET_MEMO_LIST = 'GET_MEMO_LIST';
export const ADD_MEMO = 'ADD_MEMO';
export const REMOVE_MEMO = 'REMOVE_MEMO';

// action creators
const getMemoList = (list) => {
  return {
    type: GET_MEMO_LIST,
    payload: {
      list,
    },
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
const removeMemo = (id) => {
  return {
    type: REMOVE_MEMO,
    payload: {
      id,
    },
  };
};

export const actionCreators = {
  getMemoList,
  addMemo,
  removeMemo,
};

// initial state
const initialState = {
  memoList: [],
};

// reducer
export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMO_LIST: {
      return {
        memoList: action.payload.list,
      };
    }
    case ADD_MEMO: {
      return {
        memoList: [...state.memoList, action.payload.memo],
      };
    }
    case REMOVE_MEMO: {
      const list = state.memoList.filter((m) => m.id !== action.payload.id);
      console.log(list);
      return {
        memoList: list,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
