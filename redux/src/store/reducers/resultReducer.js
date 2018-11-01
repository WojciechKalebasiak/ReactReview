import {STORE_RESULT, REMOVE_RESULT} from '../actions';
const initialState = {
    results:[]
}
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT: {
        const newResult = {
          value:action.result,
          id: new Date()
        }
        return {
          results: [newResult, ...state.results]
        };
      }
      case REMOVE_RESULT: {
        return {
             results: state.results.filter((result) => result.id !== action.id)
        };
      }
      default:
        return state;
    }
  };
export default resultReducer;