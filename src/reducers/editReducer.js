import { SET_EDIT_TYPE } from "actions/types";

const editReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EDIT_TYPE:
      return {
        ...state,
        edit_type: action.payload
      };

    default:
      return state;
  }
};

export default editReducer;
