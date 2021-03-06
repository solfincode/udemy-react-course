export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

//action creator
export const incCount = ({ incNum = 1 } = {}) => {
  return {
    type: INCREMENT,
    incNum: typeof incNum === "number" ? incNum : 1,
  };
};

export const decCount = ({ decNum = 1 } = {}) => {
  return {
    type: DECREMENT,
    decNum: typeof decNum === "number" ? decNum : 1,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
