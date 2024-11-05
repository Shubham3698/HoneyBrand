// src/pages/Account.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Navv from '../components/Navv';
import Footer from '../components/Footer';

function Account() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up

  // Toggle between Login and Sign Up
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
      <Navv/>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>
              <Form>
                {/* Show the name field only for Sign Up */}
                {!isLogin && (
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                )}

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                {/* Show confirm password and phone number fields only for Sign Up */}
                {!isLogin && (
                  <>
                    <Form.Group controlId="formConfirmPassword" className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm your password" />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter your phone number" />
                    </Form.Group>
                  </>
                )}

                <Button variant="primary" type="submit" className="w-100">
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Button variant="link" onClick={toggleForm}>
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <Footer/>
    </div>
  );
}

export default Account;
