import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddToCart(props) {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  const [items, setItems] = useState([])

  function getItems() {

    axios.get("http://localhost:8084/item/get")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => console.log(error));}

      useEffect (() => {getItems();},[])
    
    function addToBasket() {
      const itemID = props.id
      if (!itemID) {
        console.error("Item ID is null or undefined.");
        return;
      }
      axios.post("http://localhost:8084/item/addItem/1", { id: itemID })
      .then(response => {
        console.log(response);
        alert("Item added to cart, please adjust quantity in the basket");
        getItems();
      }).catch(err => console.error(err));
  }
   
  return (    

      <div className="mt-2">
        <button class="btn btn-success" onClick={addToBasket}>Add to Basket</button>
      </div>   
  )
}

export default AddToCart
