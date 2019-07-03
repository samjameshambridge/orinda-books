import { DETAIL_EVENT } from "actions/types";

const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case DETAIL_EVENT:
      return {
        ...state,
        detail_event: action.payload
      };

    default:
      return state;
  }
};

export default eventReducer;
