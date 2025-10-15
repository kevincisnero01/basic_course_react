import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  //Crear estado pars lista de productos
  const [products, setProduct] = useState([
      {id: 1, name: "Notebook", price: 100},
      {id: 2, name: "Laptop", price: 300},
      {id: 3, name: "PC Gamer", price: 500}
    ]);
  
  //Crear estado para  carrito
  const [cart, addProduct] = useState([]);
  
  //Obtener fecha 
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header
        title='Tienda Virtual'
      />
      <h4>Lista de Productos</h4>
      {products.map(product => (
          <Product
            key={product.id}
            product={product}
            products={products}
            cart={cart}
            addProduct={addProduct}
          />
      ))}
      
      <Cart
        cart={cart}
      />
      
      <Footer
        year={currentYear}
      />
    </>
  )
}

export default App
