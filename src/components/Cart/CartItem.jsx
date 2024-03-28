import React from 'react';
import './CartItem.css';
import { useStateValue } from "../../StateProvider";

function CartItem({ id, image, name, price, quantity }) {
  const [{basket}, dispatch] = useStateValue();
 
 const removeFromBasket = () => {
  dispatch ({
    type: 'REMOVE_FROM_BASKET',
    id: id,
  })
 }

 const updateBasket = () => {
 }
  
  return (
    <div className='cartItem'>
      <img className='cartItem_image' src={image}></img>
      <div className='cartItem_info'>
        <p className='cartItem_name'>{name}</p>
        <p className='cartItem_price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>

        <div className='cartItem_quantity'>
          {Array(quantity).fill().map((_, i) => (
            <p>1</p>
          ))}
        </div>
        <button onClick={updateBasket}>Update</button>
        <button onClick={removeFromBasket}>Delete</button>
      </div>
    </div>
  )
}

export default CartItem

