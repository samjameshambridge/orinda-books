import {
  SEARCH_TYPE,
  SEARCH_VALUE,
  SECONDARY_SEARCH_VALUE
} from "actions/types";

export const setSearchType = value => {
  return {
    type: SEARCH_TYPE,
    payload: value
  };
};

// set the value of the search
export const setSearchValue = value => {
  return {
    type: SEARCH_VALUE,
    payload: value
  };
};

// in the case that there are two search components in one page, this sets the search value of the second search component
export const setSecondarySearchValue = value => {
  return {
    type: SECONDARY_SEARCH_VALUE,
    payload: value
  };
};
