// Navv.js
import React, { useContext } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge, Offcanvas } from 'react-bootstrap';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './../assets/Logo.webp';
import { CartContext } from './../Context/CartContext';

function Navv() {
  const { cartCount } = useContext(CartContext);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      style={{
        width: '100%',
        zIndex: 1000,
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
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        
        {/* Offcanvas for Sidebar */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton className="close-btn-left">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
                <FaShoppingCart style={{ marginRight: '5px' }} />
                Cart
                {cartCount > 0 && (
                  <Badge bg="danger" pill style={{ marginLeft: '5px' }}>
                    {cartCount}
                  </Badge>
                )}
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navv;
