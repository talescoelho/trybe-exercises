import category from '../data/category';

const INITIAL_REGISTER = {
  shopProducts: [],
  categories: category,
}

const ProductsReducer = (state = INITIAL_REGISTER, action) => {
  if(action.type === 'ADD_PRODUCT') {
    const productCategory = action.product.category;
    return {
      ...state,
      shopProducts: [...state.shopProducts, {productCategory, product: action.product }],
    }
  }
  return state;
}

export default ProductsReducer
