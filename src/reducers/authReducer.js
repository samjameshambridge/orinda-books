import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "actions/types";

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        auth_error: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        auth_error: null
      };

    case LOGOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default authReducer;
