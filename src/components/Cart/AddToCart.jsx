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

  function getItems() {

    axios.get("http://localhost:8081/item/get/" + props.id)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
        setImage(response.data.image);
      })
      .catch((error) => console.log(error));
    
    function addToCart() {
      const itemID = props.id
      if (!itemID) {
        console.error("Item ID is null or undefined.");
        return;
      }
      axios.post("http://localhost:8081/item/addItem/1", { id: itemID })
      .then(response => {
        console.log(response);
        props.getItems();
        alert("Item added to cart, please adjust quantity in the basket")
      }).catch(err => console.error(err))
  }}
   

 


  return (

    

      <div className="mt-2">
        <button class="btn btn-success" onClick={AddToCart}>Add to Basket</button>

      </div>
   
  )
}

export default AddToCart
