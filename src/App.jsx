import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

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
      
      <Footer
        year={currentYear}
      />
    </>
  )
}

export default App
