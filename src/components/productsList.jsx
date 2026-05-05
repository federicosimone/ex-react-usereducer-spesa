import products from "../data/products";
import style from "../components/productsList.module.css";

function ProductsList() {
    return (
        <>
            <ul className={style.listaProdotti}>
                {products.map((product) => {
                    return <li>{product.name} prezzo: {product.price} </li>
                })}
            </ul>
        </>
    )
}

export default ProductsList;