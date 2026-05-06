function Cart(props) {
    return (
        <>
            <ul>
                {props.array.map(e => {
                    return <li>{e.name}, {e.quantity} pz -  € {e.price.toFixed(2)} cad. - TOT: € {(e.price * e.quantity).toFixed(2)}</li>
                })}
            </ul>
        </>
    )
}

export default Cart