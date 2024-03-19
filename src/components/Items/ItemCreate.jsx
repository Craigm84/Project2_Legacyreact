import axios from "axios";
import { useState, useEffect } from "react";


function ItemCreate(props) {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [image, setImage] = useState("")

    function createItem() {

                axios.post("http://localhost:8084/item/create",
                { name, price, quantity, image })
                .then(response => {console.log(response);
                setName("");
                setPrice("");
                setQuantity();
                setImage("");
                }).catch(err => console.error(err))
    }


    return (<form onSubmit={createItem}>
                    <label htmlFor="Name">Name</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="Name"
                        firstname="name"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                        placeholder="Enter Product Name"
                    />
                    <br /><label htmlFor="price">Price</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="price"
                        lastname="price"
                        type="double"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                        required
                        placeholder="Enter Product Price"
                    />

                    <br /><label htmlFor="quantity">Quantity</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="quantity"
                        lastname="quantity"
                        type="number"
                        value={quantity}
                        min={0}
                        onChange={event => setQuantity(event.target.value)}
                        required
                        placeholder="Enter Quantity"

                    />

                    <br /><label className="form-label" htmlFor="image">Image</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        size=""
                        id="image"
                        type="src"
                        value={image}
                        onChange={event => setImage(event.target.value)}
                        required
                        placeholder="Enter Image URL"
                    />      


                    <div className="mt-2">
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>
            </form>

        )
    }
    export default ItemCreate;
