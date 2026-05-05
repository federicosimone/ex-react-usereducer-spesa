import products from "../data/products";

function productsList() {
    return (
        <>
            <ul>
                {products.map(product => {
                    return <li>{product.name} prezzo: {product.price} </li>
                })}
            </ul>
        </>
    )
}

export default productsList;