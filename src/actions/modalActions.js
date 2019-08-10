import { SET_MODAL_TYPE, TOGGLE_MODAL, VIEW_ITEM } from "actions/types";

// determines which modal will be show. For example: a 'view' modal or an 'edit' modal
export const setModalType = modalType => {
  return {
    type: SET_MODAL_TYPE,
    payload: modalType
  };
};

// dispatches the information about the item that the modal will contain information about.
export const setViewingItem = item => {
  return {
    type: VIEW_ITEM,
    payload: item
  };
};

// toggles the modal between on and off
export const toggleModal = modalType => {
  return {
    type: TOGGLE_MODAL,
    payload: modalType
  };
};
