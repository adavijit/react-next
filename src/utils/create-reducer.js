import { combineReducers } from 'redux';
import showcasesReducer from 'containers/Home/reducer';
import globalReducer from '../reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    global: globalReducer,
    ...asyncReducers,
  });
}
