import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { GiRunningShoe } from "react-icons/gi";
import { Container, Carrinho, Logo } from './styles';
import logo2 from '../../assets/images/logo2.png';
import { connect } from 'react-redux';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <Logo>Dark-Shoes
        <GiRunningShoe size={42} color="#FFF"/>
        </Logo>
      </Link>

      <Carrinho to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF"/>
      </Carrinho>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
