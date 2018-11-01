import { combineReducers } from "redux";
import resultReducer from './reducers/resultReducer';
import counterReducer from './reducers/counterReducer';
const reducer = combineReducers({
  res:resultReducer,
  ctr:counterReducer
});
export default reducer;