import axios from "axios";
import { useState, useEffect } from "react";
import ItemManager from "./ItemManager";
import { Link, Navigate } from "react-router-dom"
import BasketCreate from "./BasketCreate";

function ItemGet(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [items, setItems] = useState([]);

    function getItems() {

        axios.get("http://localhost:8084/item/get")
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error))
    }
    useEffect(getItems, []);

    const itemComponents = []

    for (const item of items) {
        console.log("Items:", props.item);
        itemComponents.push(
            <ItemManager
                key={item.id + "" + "" + item.name}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
            />
        )
    }

    return (
        <div>
            <div>
                <br />
                   <br />
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">

                        {
                            items.map((item, index) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td> <Link className="btn btn-primary" id="update" type="submit" to={`/Item/update/${item.id}`}>Update</Link> </td>
                                    <td><button type="button" className="btn btn-danger" id = "delete" onClick={() => {
                                        axios.delete("http://localhost:8084/item/delete/" + item.id)
                                            .then(res => {
                                                getItems()
                                            })
                                            .catch(err => console.error(err));
                                    }}>DELETE</button></td>
                                </tr>
                            ))
                        }
                        <div>
                        </div>
                    </tbody>
                </table>
            </div>
        </div >

    );
}

export default ItemGet;