import {
  SEARCH_TYPE,
  SEARCH_VALUE,
  SECONDARY_SEARCH_VALUE
} from "actions/types";

const initialState = {
  search_value: "",
  secondary_search_value: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TYPE:
      return {
        ...state,
        search_type: action.payload
      };

    case SEARCH_VALUE:
      return {
        ...state,
        search_value: action.payload
      };

    case SECONDARY_SEARCH_VALUE:
      return {
        ...state,
        secondary_search_value: action.payload
      };

    default:
      return state;
  }
};

export default searchReducer;
