// src/components/Footer.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Don't forget to import Nav!
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand>The Generics</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {/* Add your app icons or links here */}
          {/* Example: */}
          <Nav className="ml-auto">
      <Nav.Link href="https://www.youtube.com" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </Nav.Link>
      <Nav.Link href="https://www.spotify.com" target="_blank">
        <FontAwesomeIcon icon={faSpotify} size="lg" />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;

