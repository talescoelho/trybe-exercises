function deleteProduct(idProduct) {
  return {
    type: 'DELETE_PRODUCT',
    idProduct,
  }
}

export default deleteProduct;
