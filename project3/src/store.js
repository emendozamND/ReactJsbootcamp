import { createStore } from "redux";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(reducer);
