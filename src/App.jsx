import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductsList from './components/ProductsList'

function App() {
  const [addedProduct, setaddedProduct] = useState([])

  const addToCart = (productCliccato) => { //prendo in considerazione il prodotto cliccato 
    console.log("prodotto cliccato", productCliccato) //controllo quale prodotto ho cliccato
    setaddedProduct(prev => { // per il setter, prendo lo stato precedente 
      if (!prev.some(e => e.name === productCliccato.name)) { //se il nome dell'oggetto NON corrisponde con il nome dell'oggeto cliccato
        return [...prev, { ...productCliccato, quantity: 1 }] // ritorno un nuovo array con lo stesso contenuto del precedente, a cui aggiungo
      } else {                                                //il prodotto cliccato e la prorietà con quantità 1 
        return prev.map(e => {                          //se il nome corrisponde, devo restituire un nuovo array (per aggiornare lo state), 
          if (e.name === productCliccato.name) {        //in cui la quantità è incrementata di 1. 
            return { ...e, quantity: e.quantity + 1 } //CREA UN NUOVO OGGETTO PARTENDO DA e che abbia una proprietà quantity che sarà
          } else {                                    // la proprietà quantiti di e (e.quantity), ma incrementata di 1
            return e
          }
        })
      }


    })

  };

  console.log("array aggiornato", addedProduct)
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
