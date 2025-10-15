import React from "react";
import './cart.css';
import Product from './Product';

const Cart = ({cart}) => {
  return(
    <div className="cart">
      <h4>Tu Carrito de Compras</h4>
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