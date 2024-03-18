import React from "react"
import "./Product.css";
import { useStateValue } from "../StateProvider";
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
                <p className="product_info_name">{name}</p>
                <div className="product_price_quantity">
                    <div className="product_price">

                        <div className="buttons">

                            <i class="bi bi-dash-lg"></i>
                            <div className="product_quantity">1</div>
                            <i class="bi bi-plus-lg"></i>
                        <small>£</small>
                        <strong>{price}</strong>
                        </div>

                    </div>
                </div>
            </div>
            <button onClick={addToBasket}>Add to basket</button>
        </div>                

            )
}

            export default Product
