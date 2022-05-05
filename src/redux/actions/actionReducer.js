export const addNum = (value = 1) => {
  return {
    type: "ADD",
    payload: value,
  };
};

export const delNum = (value = 1) => {
  return {
    type: "DEL",
    payload: value,
  };
};

export const resNum = (value = 1) => {
  return {
    type: "RES",
    payload: value,
  };
};
