import { AddStoreReducer } from './AddStoreReducer';
import { StoreReducer } from './StoreReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  AddStoreReducer,
  StoreReducer,
});
