import { TEST } from "./actionType";

const initState = {
  testVal: "测试代码"
};

export default (state = initState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case TEST:
      console.log("6的雅痞11");
      newState.testVal += "6";
      break;
    default:
      return newState;
  }
  return newState;
};
