import React from "react";

const Product = ({product, cart, addProduct, products}) => {
  
  //destructurar propiedades
  const {id, name, price} = product;
  
  //Agregar producto al carrito
  const  selectProduct  = (id) =>{
    
    const product = products.filter(product => product.id === id)[0];
    
    addProduct([
      ...cart,
      product
      ]);
  }

  return(
    <div>
      <p>Proucto: {name}</p> 
      <p>Precio: {price}$</p> 
      <button
        type="button" 
        style={{ padding: '2px 4px', border: '1px solid gray' }} 
        onClick={ () => selectProduct(id) }
      >
        Comprar
      </button>
    </div>
    )
}

export default Product;