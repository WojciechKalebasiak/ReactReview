import { INCREMENT, DECREMENT, ADD, SUBSTRACT } from "../actions/actionTypes";
import { updateState } from "./utility";
const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return updateState(state, { counter: state.counter + 1 });
    case DECREMENT:
      return updateState(state, { counter: state.counter - 1 });
    case ADD:
      return updateState(state, { counter: state.counter + action.value });
    case SUBSTRACT:
      return updateState(state, { counter: state.counter - action.value });
    default:
      return state;
  }
};
export default counterReducer;
