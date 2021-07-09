import React from 'react';
import { connect } from 'react-redux';
import deleteProduct from '../actions/products/deleteProduct';

export const Products = ({ idShop = false, registers, shopProducts, deleteProduct }) => {
  let allProductShop;
  if (idShop) {
    allProductShop = shopProducts.filter(({ product }) => product.storeId === idShop);
  } else {
    allProductShop = shopProducts;
  }
  return (
    <div>
      { allProductShop.length > 0 
        ? allProductShop.map((productItens, index) => {
          const { product } = productItens;
          const ShopName = registers.find(({ id }) => (id === product.storeId ) );
          return (
            <div key={ index }>
              <span>{ product.productNome } </span><span>- R$: { product.preco },00 </span>
              <span>- Estoque: {product.quant} - </span><span> {ShopName.name} - </span>
              <img src={product.url} alt={product.productNome} width="50px"/>
              {!idShop
                ? <button type="button">Comprar</button>
                : <button type="button" onClick={ () => deleteProduct(productItens.productId) }>Excluir Produto</button>
              }
            </div>
          )
        })
        : <p>Não há produtos Cadastrados</p>
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  registers: state.RegisterReducer.registers,
  shopProducts: state.ProductsReducer.shopProducts,
})

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (productId) => dispatch(deleteProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
