import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  //Crear lista de productos
  const [products, setProduct] = useState([
      {id: 1, name: "Harina Pan", price: 200},
      {id: 2, name: "Arroz", price: 300},
      {id: 3, name: "Pasta", price: 400}
    ]);
  
  //Obtener fecha 
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Header
        title='Tienda Virtual'
      />
      <h3>Lista de Productos</h3>
      {products.map(product => (
          <Product
            key={product.id}
            product={product}
          />
      ))}
      <Footer
        year={currentYear}
      />
    </>
  )
}

export default App
