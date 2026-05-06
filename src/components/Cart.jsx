function Cart(props) {
    return (
        <>
            <h2>Il tuo Carrello:</h2>
            <ul>
                {props.array.map(e => {
                    return <li>{e.name}, {e.quantity} pz -  € {e.price.toFixed(2)} cad. - <strong>TOTALE: € {(e.price * e.quantity).toFixed(2)}</strong></li>
                })}
            </ul>
        </>
    )
}

export default Cart