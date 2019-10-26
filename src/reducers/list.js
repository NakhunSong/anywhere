// actions
export const GET_MEMO_LIST = 'list/GET_MEMO_LIST';
export const GET_MEMO_LIST_SUCCESS = 'list/GET_MEMO_LIST_SUCCESS';

// action creators
const getMemoList = () => {
  return {
    type: GET_MEMO_LIST,
  };
};

export const actionCreators = {
  getMemoList,
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
        ...state,
      };
    }
    case GET_MEMO_LIST_SUCCESS: {
      return {
        memoList: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
