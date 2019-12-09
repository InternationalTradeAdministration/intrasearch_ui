import { combineReducers } from 'redux';
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
  resultState: resultReducer,
})

export default rootReducer;