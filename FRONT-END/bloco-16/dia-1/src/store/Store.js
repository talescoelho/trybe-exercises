import { createStore } from 'redux';
import ContadorReducer from '../reducers/ContadorReducer';

const Store = createStore(ContadorReducer);

export default Store;
