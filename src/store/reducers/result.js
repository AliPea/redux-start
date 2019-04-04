import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, {results: updatedArray});
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
  }
  return state;
};

export default reducer;

//comments: DELETE_RESULT
// const id = 2;
// const newArray = [...state.results];
// newArray.splice(id, 1)
//STORE_RESULT:
//we use concat() to push into results instead as push() method would mutate the original results object (not a good practice).
//You can change data here, meaning result could be multiply by 2 for example.
//Data can be manipulated in the reducer(here) on in the action creator
