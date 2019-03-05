// this file is not added to the project. run it with node instead
// Independent from React

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};



// Reducer
// Using ES6 feature. Initial state argument in the function to the
// default value
const rootReducer = (state = initialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if(action.type === 'IADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Dispatchint Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

// Subscription
