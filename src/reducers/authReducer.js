import { LOGIN_ERROR, PASSWORD_RESET_ERROR } from "actions/types";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload
      };

    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        password_error: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default authReducer;
