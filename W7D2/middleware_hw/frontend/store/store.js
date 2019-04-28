import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

// basic middleware
const addLoggingToDispatch = store => next => action => { // fantastic curry love it could even curry further with const addLoggingToDispatch = store => next => action => {} love it
  console.log(store.getState()); // old state
  console.log(action); // log the action
  const result = next(action); // right dispatches take an action love it
  console.log(store.getState()); // new state
  return result; // amazing how well you remember the stuff even ages later being so into it all let's do this thing and fucking crush it. So insanely lucky to have gotten past all the really hardcore learning for sure that was huge now let's do the rest for sure
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
