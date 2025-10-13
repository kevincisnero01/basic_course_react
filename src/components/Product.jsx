import React from "react";

function Product({product}){
  
  const {name, price} = product;
  return(
    <div>{name} = {price}</div>
    )
}

export default Product;