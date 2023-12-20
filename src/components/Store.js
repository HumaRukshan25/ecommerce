import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Store.css';
import { useCart } from './CartContext';

const Store = () => {
  const { addToCart, increaseQuantity, decreaseQuantity } = useCart();

  const musicItems = [
    { id: 1, title: 'Album 1', price: 12.99, image: 'album1.jpg' },
    { id: 2, title: 'Album 2', price: 14.99, image: 'album2.jpg' },
    { id: 3, title: 'Album 3', price: 9.99, image: 'album3.jpg' },
    { id: 4, title: 'Album 4', price: 19.99, image: 'album4.jpg' },
  ];

  const merchItems = [
    { id: 5, title: 'T-Shirt', price: 19.99, image: 'shirt.jpg' },
    { id: 6, title: 'Coffee Cup', price: 6.99, image: 'cup.jpg' },
    // Add more merch items as needed
  ];

  const renderCard = (item) => (
    <Card key={item.id}>
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(item)}>
          ADD TO CART
        </Button>
        <Button variant="success" onClick={() => increaseQuantity(item.id)}>
          Increase Quantity
        </Button>
        <Button variant="danger" onClick={() => decreaseQuantity(item.id)}>
          Decrease Quantity
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <h2>The Generics</h2>
      <h3>MUSIC</h3>
      {musicItems.map(renderCard)}

      <h3>MERCH</h3>
      {merchItems.map(renderCard)}

      <Button variant="success">See the cart</Button>
    </div>
  );
};

export default Store;
