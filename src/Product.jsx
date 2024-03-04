import React from "react"
import "./Product.css";
import { useStateValue } from "./StateProvider";
import "bootstrap-icons/font/bootstrap-icons.css";


function Product({ id, name, price, image, quantity }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("basket:", basket)

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                key: id + "" + name,
                id: id,
                name: name,
                price: price,
                quantity: quantity,
                image: image,
            },
        });
    };

    return (
        <div className="product">
            <img src={image} alt=""></img>
            <div className="product_info">
                <p>{name}</p>

                <div className="product_quantity">
                    {Array(quantity).fill().map((_, i) => (
                        <p>1</p>
                    ))}
                </div>

                <div className="product_price_quantity">
                    <div className="product_price">
                        <small>£</small>
                        <strong>{price}</strong>

                        <div className="buttons">

                            <i class="bi bi-dash-lg"></i>
                            <div className="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>

                        </div>

                    </div>
                </div>
            </div>
            <button onClick={addToBasket}>Add to basket</button>
        </div>                

            )
}

            export default Product
