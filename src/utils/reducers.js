import { combineReducers } from 'redux';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    home: (state) => ({ state }),
    
    ...injectedReducers,
  });

  return rootReducer;
};