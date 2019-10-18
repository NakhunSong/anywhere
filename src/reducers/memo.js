import { getItem } from "lib/utils/listLocalStorage";

// actions
export const GET_MEMO = 'GET_MEMO';

// action creators
const getMemo = (memo) => {
  return {
    type: GET_MEMO,
    payload: {
      data: memo,
    },
  };
};

export const actionCreators = {
  getMemo,
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
    default: {
      return {
        ...state,
      };
    }
  }
}
