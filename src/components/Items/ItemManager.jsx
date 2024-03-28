import PropTypes from 'prop-types';

function ItemManager(props) {
    
    return (   
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            <td>{props.image}</td>
        </tr>
    );
    }

    ItemManager.propTypes = {
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        image: PropTypes.string,
        id: PropTypes.number
    }
export default ItemManager;