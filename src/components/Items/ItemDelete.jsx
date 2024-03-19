import axios from "axios";
import { useState, useEffect } from "react";

function ItemDelete(props) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")


useEffect(function getItems() {

    axios.get("http://localhost:8084/item/get")
    .then((response) =>  {
        console.log("Response:", response);
        setId(response.data.id);
        setName(response.data.name);
        setPrice(response.data.price);
        setQuantity(response.data.quantity);
    }).catch(error => console.error(error));
}, []);

    const itemList = []


            axios.delete("http://localhost:8084/item/delete/" + props.id)
                .then(response => { console.log(response);
                }).catch(error => console.error(error))



    return ( 
        <div>
        <button onClick={() => {
;
      }}>Remove</button>
</div>
     )
}

export default ItemDelete;