// Navv.js
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Badge, Offcanvas } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/Logo.webp';
import { CartContext } from './../Context/CartContext';

function Navv() {
  const { cartCount } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMenuClick = (path) => {
    navigate(path); // Navigate to the clicked link
    handleClose(); // Close the Offcanvas menu
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      style={{
        width: '100%',
        zIndex: 1000,
        background:'red'
      }}
    >
      <Container fluid className="d-flex align-items-center">
        {/* Toggle button aligned to the left on mobile */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-2 order-1 order-lg-0" onClick={handleShow} />

        {/* Logo positioned next to the toggle button */}
        <Navbar.Brand as={Link} to="/" className="order-2 order-lg-1">
          <img
            src={logo}
            alt="MyBrand Logo"
            width="90"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Icons: Search, Account, and Cart positioned to the right on mobile */}
        <div className="d-flex align-items-center ms-auto order-3">
          {/* Search Icon */}
          {/* Account and Cart Icons */}
          <Nav.Link as={Link} to="/Account" className="d-flex align-items-center me-3">
            <FaUser style={{ fontSize: '1.2rem' }} />
          </Nav.Link>
          <Nav.Link as={Link} to="/Cart" className="d-flex align-items-center">
            <FaShoppingCart style={{ fontSize: '1.2rem' }} />
            {cartCount > 0 && (
              <Badge bg="danger" pill style={{ marginLeft: '5px' }}>
                {cartCount}
              </Badge>
            )}
          </Nav.Link>
        </div>

        {/* Offcanvas for Sidebar */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{ width: '60%' }} // Set width to 60%
          show={show} // Control visibility
          onHide={handleClose} // Close when clicking outside
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              
              
              <hr />
              <Nav.Link onClick={() => handleMenuClick("/")}>Home</Nav.Link>
              
              <hr />
              <Nav.Link onClick={() => handleMenuClick("/Our-Products")}>Our products</Nav.Link>
              
              <hr />
              <Nav.Link onClick={() => handleMenuClick("/Our-Story")}>Our story</Nav.Link>
          
              <hr />
              <Nav.Link onClick={() => handleMenuClick("/Contact")}>Contact</Nav.Link>
      
              <hr />
              <Nav.Link onClick={() => handleMenuClick("/Track-order")}>Track order</Nav.Link>
            
              <hr />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navv;

