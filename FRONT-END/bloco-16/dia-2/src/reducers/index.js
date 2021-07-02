import { combineReducers } from 'redux';
import FormReducer from './FormReducer';
import RegisterReducer from './RegisterReducer';
import ProductsReducer from './ProductsReducer';

export default combineReducers({
  FormReducer,
  RegisterReducer,
  ProductsReducer,
})
