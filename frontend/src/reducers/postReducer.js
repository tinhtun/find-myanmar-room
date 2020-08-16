import _ from "lodash";

import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
} from "../actions/types";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(payload, "id") };
    case FETCH_POST:
      return { ...state, [payload.id]: payload };
    case CREATE_POST:
      return { ...state, [payload.id]: payload };
    case EDIT_POST:
      return { ...state, [payload.id]: payload };
    case DELETE_POST:
      return _.omit(state, payload);
    default:
      return state;
  }
};
