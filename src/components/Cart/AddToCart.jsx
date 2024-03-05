import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemManager from '../Items/ItemManager';

function AddToCart(props) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    const [items, setItems] = useState("")

    useEffect(function getItems() {

        axios.get("http://localhost:8081/item/get/")
            .then((response) => {
                console.log(response.data);
                setName(response.data.name);
                setPrice(response.data.price);
                setQuantity(response.data.quantity);
                setImage(response.data.image);
            })
            .catch((error) => console.log(error));
    }, []);



  return (
<div></div>
)
}


export default AddToCart