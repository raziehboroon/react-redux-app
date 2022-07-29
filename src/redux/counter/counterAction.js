export const increaseCounter = (value = 1) => {
  return { type: "INCREASE_COUNTER", payload: value };
};

export const decreaseCounter = (value = 1) => {
  return { type: "DECREASE_COUNTER", payload: value };
};
