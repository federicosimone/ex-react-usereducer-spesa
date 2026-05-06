import products from "../data/products";
import style from "../components/productsList.module.css";

function ProductsList(props) {
    return (
        <>

            <ul className={style.listaProdotti}>
                {products.map((product, i) => {

                    return <li key={i}>{product.name} € {(product.price).toFixed(2)} <button onClick={() => props.addToCart(product)}>Aggiungi al carrello</button> </li>
                })}
            </ul>
        </>
    )
}

export default ProductsList;