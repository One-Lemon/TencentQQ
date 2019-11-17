import { TEST } from "./actionType";

/**
 * 测试action
 */
export const onTest = data => {
  return {
    type: TEST,
    data
  };
};
