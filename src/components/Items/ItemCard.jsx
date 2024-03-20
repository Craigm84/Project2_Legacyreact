import React from 'react'
import axios from "axios";
import { useStateValue } from "../../StateProvider";
import { useState, useEffect } from "react";
import './ItemCard.css';
import Euros from './Euro';
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import USD from './UsDollar';

import AddToCart from '../Cart/AddToCart';
import { Dropdown } from 'bootstrap';

function ItemCard(props) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [items, setItems] = useState("");
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const params = useParams();
    const [quantity, setQuantity] = useState(0);


    const [{ basket }, dispatch] = useStateValue();
    console.log("basket:", basket)


    function addToBasket() {

    }

    function getCard() {

        axios.get("http://localhost:8084/item/get")
            .then(response => {
                setItems(response.data)
                setName(response.data.name);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
                setImage(response.data.image);

                console.log(response);
            })
            .catch(err => console.error(err))
    }
    useEffect(getCard, []);


    const displayItems = [];

    for (const item of items)

        displayItems.push(
            <div className='col-auto' key={item.id} >
                <div className='card'>
                    <div className='card_body'>

                        <div className='card_text'>

                            <p className='card_image'><b></b><img width="200px" src={item.image} alt=""></img></p>
                            <p className='card_name'> <b>Name:</b> {item.name}</p>
                            <p><b>Quantity:</b> {item.Quantity}</p>

                            <div className="card_price_quantity">
                                <div className="card_price">
                                    <div style={{
                                        position: 'relative',
                                        left: '30%',
                                    }} className="buttons">
                                        <i onClick={() => setQuantity(quantity - 1)} className="decrement" class="bi bi-dash-lg"></i>
                                        <div id="quantityChange" className="quantity">{item.quantity}</div>
                                        <i onClick={() => setQuantity(quantity + 1)} className="increment" class="bi bi-plus-lg"></i>
                                    </div>
                                    <div>
                                        <p>
                                            <select>
                                                <option selectedValue={"Choose Currency"}>Choose Currency</option>
                                                <option>GBP: £{item.price}</option>
                                                <option>Euro: <Euros item={item} /></option>
                                                <option>US Dollar: <USD item={item} /></option>
                                            </select>
                                        </p>
                                    </div>
                                    <AddToCart id={item.id} />
                                </div>
                            </div>





                        </div>
                    </div>
                </div>

            </div>

        )







    return (

        <>
            <br />
            <div className='container'>
                <div className='row'>

                    {displayItems}
                </div>
            </div>
        </>


    );
}

export default ItemCard
