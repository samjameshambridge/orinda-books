import { SET_MODAL_TYPE, TOGGLE_MODAL, VIEW_ITEM } from "actions/types";

export const setModalType = modalType => {
  return {
    type: SET_MODAL_TYPE,
    payload: modalType
  };
};

export const setViewingItem = item => {
  return {
    type: VIEW_ITEM,
    payload: item
  };
};

export const toggleModal = modalType => {
  return {
    type: TOGGLE_MODAL,
    payload: modalType
  };
};
