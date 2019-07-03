import { SET_EDIT_TYPE } from "actions/types";

export const setEditType = type => {
  return {
    type: SET_EDIT_TYPE,
    payload: type
  };
};
