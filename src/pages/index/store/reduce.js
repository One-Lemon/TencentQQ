import { SETTALKUSER } from "./actionType";

const initState = {
  talkUser: {}
};

export default (state = initState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SETTALKUSER:
      newState.talkUser = action.data;
      break;
    default:
      return newState;
  }
  return newState;
};

