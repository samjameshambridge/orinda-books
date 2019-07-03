import { TOGGLE_MODAL, VIEW_ITEM } from "actions/types";

const initialState = { modal_open: false };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal_open: !state.modal_open,
        modal_type: action.payload
      };

    case VIEW_ITEM:
      return {
        ...state,
        view_item: action.payload
      };

    default:
      return state;
  }
};

export default modalReducer;
