import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0,
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    // in 'INCREMENT' I'm using the old way of cloning the state into a new Object. For 'DECREMENT' for example I am using the spread operator to copy all the items of state and return it
    case actionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + 1});
    case actionTypes.DECREMENT:
      return updateObject(state, {counter: state.counter - 1});
    case actionTypes.ADD:
      return updateObject(state, {counter: state.counter + action.val});
    case actionTypes.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.val});
  }
  return state;
};

export default reducer;
