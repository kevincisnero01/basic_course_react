import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
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
