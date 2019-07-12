import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PASSWORD_RESET_ERROR
} from "actions/types";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login_error: null
      };

    case LOGOUT_SUCCESS:
      return state;

    default:
      return state;

    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        password_error: action.payload
      };
  }
};

export default authReducer;
