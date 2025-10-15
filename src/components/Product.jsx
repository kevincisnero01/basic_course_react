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
      <ul>
        <li>Proucto: {name}</li>
        <li>Precio: {price}</li>
        <li style={{ listStyleType: 'none' }}> 
          <button
            type="button" 
            onClick={ () => selectProduct(id) }
          >
            Comprar
          </button>
        </li>
      </ul>

    </div>
    )
}

export default Product;