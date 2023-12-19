// src/components/Store.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Store.css'; // Import the CSS file
const Store = () => {
  return (
    <div>
      <h2>The Generics</h2>
      <h3>MUSIC</h3>
      <Card>
        <Card.Img variant="top" src="album1.jpg" alt="Album 1" />
        <Card.Body>
          <Card.Title>Album 1</Card.Title>
          <Card.Text>$12.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="album2.jpg" alt="Album 2" />
        <Card.Body>
          <Card.Title>Album 2</Card.Title>
          <Card.Text>$14.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="album3.jpg" alt="Album 3" />
        <Card.Body>
          <Card.Title>Album 3</Card.Title>
          <Card.Text>$9.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="album4.jpg" alt="Album 4" />
        <Card.Body>
          <Card.Title>Album 4</Card.Title>
          <Card.Text>$19.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <h3>MERCH</h3>
      <Card>
        <Card.Img variant="top" src="shirt.jpg" alt="T-Shirt" />
        <Card.Body>
          <Card.Title>T-Shirt</Card.Title>
          <Card.Text>$19.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="cup.jpg" alt="Coffee Cup" />
        <Card.Body>
          <Card.Title>Coffee Cup</Card.Title>
          <Card.Text>$6.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Button variant="success">See the cart</Button>
    </div>
  );
};

export default Store;
