import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
  //You can change data here
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

//getState is a utility function, don't over use it. Use reducer for more logic

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter)
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
  };
};
