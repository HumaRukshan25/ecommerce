import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, placeOrder } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
         
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>Increase Quantity</button>
          <button onClick={() => decreaseQuantity(item.id)}>Decrease Quantity</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={placeOrder}>Place Order</button>}
    </div>
  );
};

export default Cart;
