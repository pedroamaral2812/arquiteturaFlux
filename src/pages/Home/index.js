import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { ProductList } from './styles';


export default class Home extends Component{
  state = {
    products: [],
  };

  async componentDidMount(){
    const response = await api.get('produtcs');

    this.setState({products: response.data});
  }

  render() {
    return (
      <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x" 
        alt="Tênis" 
        />
        <strong>Tênis muito legal</strong>
        <span>R$139,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
    </li>
  </ProductList>
  );
  }
}
