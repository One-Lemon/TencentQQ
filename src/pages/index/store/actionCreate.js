import { SETTALKUSER } from "./actionType";

/**
 * 测试action
 */
export const setTalkUser = data => {
  return {
    type: SETTALKUSER,
    data
  };
};
