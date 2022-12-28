import { createStore } from "redux";

const initialState = {
  LoginOrRegister: "login",
  BookToOpen: 1004,
  Rerender: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PaneSelection":
      return {
        ...state,
        LoginOrRegister: action.pane,
      };

    case "OpenTheBook":
      return {
        ...state,
        BookToOpen: action.book,
      };

    case "rerender":
      return {
        ...state,
        Rerender: state.Rerender + 1,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
