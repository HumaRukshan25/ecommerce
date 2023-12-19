// src/components/Store.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Store = () => {
  return (
    <div>
      <h2>The Generics</h2>
      <h3>MUSIC</h3>
      <Card>
        <Card.Img variant="top" src="https://example.com/album1.jpg" alt="Album 1" />
        <Card.Body>
          <Card.Title>Album 1</Card.Title>
          <Card.Text>$12.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://example.com/album2.jpg" alt="Album 2" />
        <Card.Body>
          <Card.Title>Album 2</Card.Title>
          <Card.Text>$14.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://example.com/album3.jpg" alt="Album 3" />
        <Card.Body>
          <Card.Title>Album 3</Card.Title>
          <Card.Text>$9.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://example.com/album4.jpg" alt="Album 4" />
        <Card.Body>
          <Card.Title>Album 4</Card.Title>
          <Card.Text>$19.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <h3>MERCH</h3>
      <Card>
        <Card.Img variant="top" src="https://www.bing.com/ck/a?!&&p=f1a770392904024fJmltdHM9MTcwMjg1NzYwMCZpZ3VpZD0wY2FlZTgzOS1hOTMzLTZhMjYtMzg0OC1mYTFkYTgwNjZiZTgmaW5zaWQ9NTU0NQ&ptn=3&ver=2&hsh=3&fclid=0caee839-a933-6a26-3848-fa1da8066be8&u=a1L2ltYWdlcy9zZWFyY2g_cT1odHRwIGltYWdlcyBsaW5rIGZvciB0c2hpcnQgY29mZmVjdXAgYWxidW1zJkZPUk09SVFGUkJBJmlkPThBNTBGODA0RUU2M0Q5MkIzRDY4QzAyRTExRUU4QTY2N0I2NDgyQTQ&ntb=1" alt="T-Shirt" />
        <Card.Body>
          <Card.Title>T-Shirt</Card.Title>
          <Card.Text>$19.99</Card.Text>
          <Button variant="primary">ADD TO CART</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://example.com/coffee-cup.jpg" alt="Coffee Cup" />
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
