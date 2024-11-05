import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import footer from './../assets/footer.webp';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'White', color: 'Black', padding: '0' }}>
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best quality products and services to our customers.
              Our goal is to make shopping easy and enjoyable for everyone.
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: support@yourwebsite.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: 123, Main Street, City, Country</p>
          </Col>

          {/* Social Media Links Section */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" style={{ color: 'black', marginRight: '1rem' }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" style={{ color: 'black', marginRight: '1rem' }}>
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" style={{ color: 'black', marginRight: '1rem' }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" style={{ color: 'black' }}>
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>

      {/* Hero Image Section Outside of Container */}
      <div style={{ width: '100%' }}>
        <img
          src={footer}
          alt="Hero"
          style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
        />
      </div>
    </footer>
  );
}

export default Footer;
