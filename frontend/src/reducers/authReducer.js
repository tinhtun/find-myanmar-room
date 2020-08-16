import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  const { tpe, payload } = action;
  switch (type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: payload.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
