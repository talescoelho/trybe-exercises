import category from '../data/category';
let localStorageProducts = [];
if (localStorage.PRODUCTS) {
  localStorageProducts = JSON.parse(localStorage.getItem('PRODUCTS'))
}
const INITIAL_REGISTER = {
  shopProducts: localStorageProducts,
  categories: category,
}

const ProductsReducer = (state = INITIAL_REGISTER, action) => {
  if(action.type === 'ADD_PRODUCT') {
    const productCategory = action.product.category;
    const productId = productCategory.split('')[0].toUpperCase() + (state.shopProducts.length + 1000);
    if (!localStorage.PRODUCTS) {
      const newProduct = {productId, productCategory, product: action.product }
      localStorage.setItem('PRODUCTS', JSON.stringify([newProduct]))
    } else {
      const productsStorage = JSON.parse(localStorage.getItem('PRODUCTS'))
      productsStorage.push({productId, productCategory, product: action.product })
      localStorage.setItem('PRODUCTS', JSON.stringify(productsStorage))
    }
    return {
      ...state,
      shopProducts: [...state.shopProducts, {productId, productCategory, product: action.product }],
    }
  } else if (action.type === 'DELETE_PRODUCT') {
    const productsStorage = JSON.parse(localStorage.getItem('PRODUCTS'))
      .filter(({ productId }) => productId !== action.idProduct);
    localStorage.setItem('PRODUCTS', JSON.stringify(productsStorage));
    return {
      ...state,
      shopProducts: state.shopProducts.filter(({ productId }) => productId !== action.idProduct),
    };
  }
  return state;
}

export default ProductsReducer
