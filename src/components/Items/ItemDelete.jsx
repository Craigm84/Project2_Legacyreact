import axios from "axios";

function ItemDelete(props) {

    function deleteItem() {
        axios.delete("http://localhost:8084/item/delete/" + props.id)
            .then(response => {
                console.log(response);
            }).catch(error => console.error(error))
    }

    return (
        <div>
            <button onClick={deleteItem}>Remove</button>
        </div>
    )
}

export default ItemDelete;