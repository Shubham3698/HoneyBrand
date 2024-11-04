import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTools } from 'react-icons/fa';
import Navv from '../components/Navv';

function WorkInProgress() {
  return (
    <div className="">
      <Navv/>
       <Container className="text-center" style={{ padding: '5rem 0' }}>
      <Row>
        <Col>
          <FaTools size={50} color="#ff9800" />
          <h2 style={{ marginTop: '1rem', color: '#555' }}>Work in Progress</h2>
          <p style={{ color: '#777', fontSize: '1.2rem' }}>
            This page is currently under development. Please check back later for updates.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default WorkInProgress;
