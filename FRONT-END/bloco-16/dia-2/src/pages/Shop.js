import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import addProduct from '../actions/products/addProduct';
import Products from '../components/Products';
import Logout from '../components/Logout';

export const Shop = ({ registers, logedId, categories, addProduct, logout }) => {
  const logedUser = registers.find(({ id }) => id === logedId );
  const [state, setState] = useState({ storeId: logedId })
  if (!logedUser) {
    return <Redirect to="/" />
  }

  const handleChange = ({target}) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <div>
      <p>
        {logedUser.name}
        <Logout />
      </p>
      <label htmlFor="productNome">
        Nome do Produto:  
        <input
          type="text"
          id="productNome"
          name="productNome"
          placeholder="Nome do produto"
          onChange={ handleChange }
          />
      </label><br/>
      <label htmlFor="preco">
        Preço do Produto:  
        <input
          type="number"
          id="preco"
          name="preco"
          placeholder="Preço do produto"
          onChange={ handleChange }
          />
      </label><br/>
      <label htmlFor="quant">
        Quantidade de Produtos:  
        <input
          type="number"
          id="quant"
          name="quant"
          placeholder="Quantidade de Produtos"
          onChange={ handleChange }
          />
      </label><br/>
      <label htmlFor="category">
        Categoria do Produto: 
        <select name="category" onChange={ handleChange }>
          {categories.map((category, index) => (
            <option
              name="category"
              key={index}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </label><br/>
      {/* <label htmlFor="url">
        URL da imagem do produto:  
        <input
          type="text"
          id="url"
          name="url"
          placeholder="URL do produto"
          onChange={ handleChange }
          />
      </label><br/> */}
      <button type="button" onClick={() => addProduct(state)}>Adicionar Produto</button>
      <Products idShop={logedId} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  logedId: state.RegisterReducer.logedId,
  registers: state.RegisterReducer.registers,
  categories: state.ProductsReducer.categories,
})

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
