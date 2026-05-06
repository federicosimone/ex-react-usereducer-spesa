import products from "../data/products"

function Cart(props) {
    return (
        <>
            <h2>Il tuo Carrello:</h2>
            <ul>
                {props.array.map(e => {
                    return <li>{e.name}, {e.quantity} pz -  € {e.price.toFixed(2)} cad. - <strong>TOTALE unitario: € {(e.price * e.quantity).toFixed(2)}</strong><button onClick={() => props.remove(e)}>Rimuovi dal carrello</button></li>
                })}
            </ul>

        </>
    )
}

export default Cart