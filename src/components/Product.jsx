import React from "react";

const Product = ({product, cart, addProduct, products}) => {
  
  //Destructurar propiedades
  const {id, name, price} = product;
  
  //Agregar producto al carrito
  const  selectProduct  = (id) =>{
    
    const product = products.filter(product => product.id === id)[0];
    
    addProduct([
      ...cart,
      product
      ]);
  }

  //Elimina producto del carrito
  const destroyProduct = id => {
    const products = cart.filter(product => product.id !== id);

    //colocar los productos en el state
    addProduct(products);
  }


  return(
    <div>
      <ul>
        <li>Proucto: {name}</li>
        <li>Precio: {price}</li>
        <li style={{ listStyleType: 'none' }}> 
          { products 
          ? 
            <button
              type="button" 
              onClick={ () => selectProduct(id) }
            >
              Comprar
            </button>
          : 
            <button
              type="button" 
              onClick={ () => destroyProduct(id) }
            >
              Eliminar
            </button>
          }
          
        </li>
      </ul>

    </div>
    )
}

export default Product;