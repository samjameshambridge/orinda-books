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

export const setSearchValue = value => {
  return {
    type: SEARCH_VALUE,
    payload: value
  };
};

export const setSecondarySearchValue = value => {
  return {
    type: SECONDARY_SEARCH_VALUE,
    payload: value
  };
};
