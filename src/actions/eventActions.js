import { DETAIL_EVENT } from "actions/types";

export const setDetailEvent = event => {
  return {
    type: DETAIL_EVENT,
    payload: event
  };
};
