import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";


function CartCard(props) {
    const [carts, setCarts] = useState("");

    function getCartCard() {

        axios.get("http://localhost:8084/cart/get")
            .then(response => {
                setCarts(response.data);
                console.log(response);
            })
            .catch(err => console.error(err))
    }
    useEffect(getCartCard, []);

    const displayCart = [];

    for (const cart of carts)

        displayCart.push(
            <div className='col-4' key={cart.id} >
                <div className='card'>
                    <div className='card_body'>
                        <div className='card_text'>
                            <p id="cartName" className='card_name'> <b>Name:</b> {cart.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (

        <div className='container'>
            <div className='row'>
                {displayCart}
            </div>
        </div>
    );
}
export default CartCard
