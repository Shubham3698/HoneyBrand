import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './logo.webp';

function Navv() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        position: 'fixed',  // Makes the navbar fixed to the top
        top: 0,
        width: '100%',      // Ensures it spans the entire width
        zIndex: 1000,       // Keeps it above other components
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="MyBrand Logo"
            width="90"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Our-Products">Our products</Nav.Link>
            <Nav.Link as={Link} to="/Our-Story">Our story</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Track-order">Track order</Nav.Link>
          </Nav>

          {/* Search bar with a button */}
          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {/* Account and Cart Icons */}
          <Nav>
            <Nav.Link as={Link} to="/Account" className="d-flex align-items-center">
              <FaUser style={{ marginRight: '5px' }} /> Account
            </Nav.Link>
            <Nav.Link as={Link} to="/Cart" className="d-flex align-items-center">
              <FaShoppingCart style={{ marginRight: '5px' }} /> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;