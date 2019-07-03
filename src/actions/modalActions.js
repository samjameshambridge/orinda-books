import { TOGGLE_MODAL, VIEW_ITEM } from "actions/types";

export const toggleModal = modalType => {
  return {
    type: TOGGLE_MODAL,
    payload: modalType
  };
};

export const setViewingItem = item => {
  return {
    type: VIEW_ITEM,
    payload: item
  };
};
