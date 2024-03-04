import axios from "axios";
import { useState, useEffect } from "react";
import ItemManager from "./ItemManager";
import { useNavigate, useParams } from "react-router-dom";

function ItemEdit(props) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const navigate = useNavigate();
    const params = useParams();
    const [items, setItems] = useState("")



    useEffect(function getItems() {

        axios.get(`http://localhost:8081/item/create/${id}`)
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error))
    }, []);

    function editItem() {

        axios.patch(`http://localhost:8081/item/update/${id}`,
        { name, price, quantity })
        .then(response => {console.log(response);
        setName("");
        setPrice("");
        setQuantity();
        }).catch(err => console.error(err))
}



    return (<form onSubmit={editItem}>
                     <label htmlFor="Name">Name</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="Name"
                        firstname="name"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                    />
                    <br /><label htmlFor="price">Price</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="price"
                        lastname="price"
                        type="double"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                        required
                    />

                    <br /><label htmlFor="quantity">Quantity</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="quantity"
                        lastname="quantity"
                        type="number"
                        value={quantity}
                        onChange={event => setQuantity(event.target.value)}
                        required
                    />
                    <div className="mt-2">
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>
            </form>

     )
}

export default ItemEdit;