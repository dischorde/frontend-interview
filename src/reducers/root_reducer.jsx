import { combineReducers } from 'redux';
import SatoriReducer from './satori_reducer.js';

const rootReducer = combineReducers({
  messages: SatoriReducer
});

export default rootReducer;
