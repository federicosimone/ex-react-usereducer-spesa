import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductsList from './components/productsList'

function App() {
  const [addedProduct, setaddedProduct] = useState([])

  const addToCart = (data) => {

    setaddedProduct(data) //sbagliato ... da vedere
  };

  return (
    <>
      <div>
        <h1>Lista prodotti</h1>
        <ProductsList addToCart={addToCart} />
      </div>
    </>
  )
}

export default App
