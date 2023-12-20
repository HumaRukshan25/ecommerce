// src/components/Cart.js
import React from 'react';

const Cart = ({ cartElements, removeFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartElements.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} style={{ width: '100px' }} />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
