import { createStore } from 'redux';
import RootReducer from '../reducers';

export const Store = createStore(RootReducer);
