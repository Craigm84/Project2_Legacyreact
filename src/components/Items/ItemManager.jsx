import PropTypes from 'prop-types';


function ItemManager(props) {
    
    return (   
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
        </tr>
    );
    }

    ItemManager.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }
export default ItemManager;