import axios from "axios";
import { useState, useEffect } from "react";


function BasketCreate(props) {

    const [name, setName] = useState("")

    function createBasket() {

                axios.post("http://localhost:8084/cart/create",
                { name})
                .then(response => {console.log(response);
                setName("");
                 }).catch(err => console.error(err))
    }


    return (<form onSubmit={createBasket}>
                    <label htmlFor="Name">Name</label>
                    <br /><input className="form-control border-2 border-secondary rounded" style={{ width: "250px", height: "31px" }}
                        id="Name"
                        firstname="name"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        required
                        placeholder="Enter Basket Name"
                    />      


                    <div className="mt-2">
                        <button className="btn btn-secondary" type="submit">Create Basket</button>
                    </div>
            </form>

        )
    }
    export default BasketCreate;