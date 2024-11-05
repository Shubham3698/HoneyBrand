import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fasi from './../assets/fasi.webp'

function Certification() {
  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Row className="text-center">
        <Col>
          <h2>Our Certifications</h2>
          <img
            src={fasi} // Replace with your certification image path
            alt="Certification"
            style={{ width: '100%', height: 'auto', maxWidth: '600px', marginTop: '1rem' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Certification;
