import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {/* Add your app icons or links here */}
          {/* Example: */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-danger mx-2">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="text-success mx-2">
            <i className="fab fa-spotify fa-lg"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary mx-2">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
