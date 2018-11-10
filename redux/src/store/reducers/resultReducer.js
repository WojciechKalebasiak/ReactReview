import { STORE_RESULT, REMOVE_RESULT } from "../actions/actionTypes";
import { updateState } from "./utility";
const initialState = {
  results: []
};
const removeResult = (state, action) => {
  const updatedResults = state.results.filter(
    result => result.id !== action.id
  );
  return updateState(state, { results: updatedResults });
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return updateState(state, {
        results: [{ value: action.result, id: new Date() }]
      });
    case REMOVE_RESULT:
      return removeResult(state, action);
    default:
      return state;
  }
};
export default resultReducer;
