import { useState } from 'react'
import './App.css'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

function App() {
  const [addedProducts, setAddedProducts] = useState([])


  console.log("array aggiornato", addedProducts)


  const addToCart = (productCliccato) => { //prendo in considerazione il prodotto cliccato 
    console.log("prodotto cliccato", productCliccato)
    //controllo quale prodotto ho cliccato
    setAddedProducts(prev => { // per il setter, prendo lo stato precedente 
      if (!prev.some(prod => prod.name === productCliccato.name)) { //se il nome dell'oggetto NON corrisponde con il nome dell'oggeto cliccato
        return [...prev, { ...productCliccato, quantity: 1 }] // ritorno un nuovo array con lo stesso contenuto del precedente, a cui aggiungo
      } else {                                                //il prodotto cliccato e la prorietà con quantità 1 
        return prev.map(prod => {                          //se il nome corrisponde, devo restituire un nuovo array (per aggiornare lo state), 
          if (prod.name === productCliccato.name) {        //in cui la quantità è incrementata di 1. 
            return { ...prod, quantity: prod.quantity + 1 } //CREA UN NUOVO OGGETTO PARTENDO DA e che abbia una proprietà quantity che sarà
          } else {                                    // la proprietà quantiti di prod (.quantity), ma incrementata di 1
            return prod
          }
        })
      }


    })

  };

  const removeFromCart = (product) => {
    setAddedProducts(prev => {
      return prev.filter(prod => prod.name !== product.name)
    })
  }


  const totaleDaPagare = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)

  console.log(totaleDaPagare)
  return (
    <>
      <div>
        <h1>Lista prodotti</h1>
        <ProductsList addToCart={addToCart} />
        {addedProducts.length > 0 && (<>
          <Cart
            array={addedProducts}
            remove={removeFromCart} />
        </>)}
        <h3>TOTALE DA PAGARE:</h3>
        <p>€ {(totaleDaPagare).toFixed(2)}</p>
      </div>
    </>
  )
}

export default App
