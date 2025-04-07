import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-light">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <div className="contact-info">
              <h3 className="text-primary mb-4">Contact Information</h3>
              <div className="contact-item mb-3">
                <i className="fas fa-envelope text-primary me-3"></i>
                <span className="text-light">your.email@example.com</span>
              </div>
              <div className="contact-item mb-3">
                <i className="fas fa-phone text-primary me-3"></i>
                <span className="text-light">+1 (123) 456-7890</span>
              </div>
              <div className="contact-item mb-3">
                <i className="fas fa-map-marker-alt text-primary me-3"></i>
                <span className="text-light">New York, NY, USA</span>
              </div>
              <div className="social-links mt-4">
                <a href="https://github.com" className="text-light me-3">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://linkedin.com" className="text-light me-3">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://twitter.com" className="text-light">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-dark text-light border-primary"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-dark text-light border-primary"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-light">Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Subject" 
                  className="bg-dark text-light border-primary"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-light">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Your Message" 
                  className="bg-dark text-light border-primary"
                />
              </Form.Group>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-paper-plane me-2"></i>Send Message
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 