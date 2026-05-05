import products from "../data/products";
import style from "../components/productsList.module.css";

function ProductsList(props) {
    return (
        <>
            <ul className={style.listaProdotti}>
                {products.map((product) => {



                    return <li>{product.name} prezzo: {product.price} <button onClick={() => props.addToCart(product)}>Aggiungi al carrello</button> </li>
                })}
            </ul>
        </>
    )
}

export default ProductsList;