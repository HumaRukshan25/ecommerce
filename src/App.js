// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">The Generics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="https://www.youtube.com" target="_blank"><i className="fab fa-youtube"></i></Nav.Link>
              <Nav.Link href="https://www.spotify.com" target="_blank"><i className="fab fa-spotify"></i></Nav.Link>
              <Nav.Link href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          {/* Add a route for the cart page if needed */}
        </Routes>

        {/* Add the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
