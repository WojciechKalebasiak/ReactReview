import * as actionTypes from './actionTypes';
export const save = (result) => {
    return {
        type:actionTypes.STORE_RESULT,
        result
    }
}
export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(save(result));
    }, 2000);
  };
};
export const remove = id => {
  return {
    type: actionTypes.REMOVE_RESULT,
    id
  };
};
export const removeResult = id => {
    return dispatch => {
      setTimeout(() => {
        dispatch(remove(id));
      }, 2000);
    };
  };
  
