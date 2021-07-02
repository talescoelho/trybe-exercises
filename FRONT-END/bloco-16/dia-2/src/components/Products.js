import React from 'react'
import { connect } from 'react-redux'

export const Products = ({ idShop = false, registers, shopProducts }) => {
  let allProductShop;
  if (idShop) {
    allProductShop = shopProducts.filter(({ product }) => product.storeId === idShop);
  } else {
    allProductShop = shopProducts;
  }
  return (
    <div>
      { allProductShop.length > 0 
        ? allProductShop.map(({ product }) => {
        const ShopName = registers.find(({ id }) => (id === product.storeId ) );
          return (
            <div>
              <span>{ product.productNome } </span><span>- R$: { product.preco },00 </span>
              <span>- Loja: {ShopName.name}</span>
              {!idShop
                ? <button type="button">Comprar</button>
                : <button type="button">Excluir Produto</button>
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

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
