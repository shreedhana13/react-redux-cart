// src/components/CartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CartPage;
