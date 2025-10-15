import React from "react";
import './cart.css';
import Product from './Product';

const Cart = ({cart}) => {
  return(
    <div id="main-cart" className="container">
      <h3>Tu Carrito de Compras</h3>
      {cart.length === 0 
      ? <p>No hay productos</p>
      :
      cart.map(product => (
        <Product 
          key={product.id}
          product={product}
        />
      ))
      }
    </div>
  );
}

export default Cart;