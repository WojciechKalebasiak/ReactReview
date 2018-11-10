import * as actionTypes from "./actionTypes";
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = value => {
  return {
    type: actionTypes.ADD,
    value
  };
};
export const substract = value => {
  return {
    type: actionTypes.SUBSTRACT,
    value
  };
};
export const saveResult = (result) => {
    return {
        type:actionTypes.STORE_RESULT,
        result
    }
}
export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const removeResult = id => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id
  };
};
