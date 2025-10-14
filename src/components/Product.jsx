import React from "react";

function Product({product}){
  
  //destructurar propiedades
  const {id, name, price} = product;

  //Agregar producto al carrito
  const  selectProducts  = (id) =>{
    console.log('Producto:'+id);
  }

  return(
    <div>
      <p>Proucto: {name}</p> 
      <p>Precio: {price}$</p> 
      <button
        type="button" 
        style={{ padding: '2px 4px', border: '1px solid gray' }} 
        onClick={ () => selectProducts(id) }
      >
        Comprar
      </button>
    </div>
    )
}

export default Product;