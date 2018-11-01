import { INCREMENT, DECREMENT, ADD, SUBSTRACT } from "../actions";
const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    case ADD:
      return {
        counter: state.counter + action.value
      };

    case SUBSTRACT:
      return {
        counter: state.counter - action.value
      };

    default:
      return state;
  }
};
export default counterReducer;
