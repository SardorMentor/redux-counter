const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + action.payload,
      };
    case "DEL":
      return {
        counter: state.counter - action.payload,
      };
    case "RES":
      return {
        counter: initialState.counter,
      };
    default:
      return state;
  }
};

export default counterReducer;
