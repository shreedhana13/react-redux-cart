// src/components/CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => dispatch(increaseQuantity({ itemId: id }))}>Increase Quantity</button>
      <button onClick={() => dispatch(decreaseQuantity({ itemId: id }))}>Decrease Quantity</button>
    </div>
  );
};

export default CartItem;
