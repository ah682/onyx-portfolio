import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6} className="hero-content">
            <div className="hero-text fade-up">
              <h1 className="display-4 mb-3">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <h2 className="mb-4">
                <span className="typing-text">Software Developer</span>
              </h2>
              <p className="lead mb-4 text-gray">
                I create beautiful and functional web applications that solve real-world problems.
                Passionate about clean code and user experience.
              </p>
              <div className="hero-buttons mb-4">
                <a href="#projects" className="btn btn-primary me-3">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline-light">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://linkedin.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="https://twitter.com" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="hero-image">
            <div className="image-container">
              <div className="image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                  alt="Developer" 
                  className="img-fluid rounded-circle"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <i className="fab fa-react fa-2x text-primary"></i>
                </div>
                <div className="floating-element element-2">
                  <i className="fab fa-js fa-2x text-warning"></i>
                </div>
                <div className="floating-element element-3">
                  <i className="fab fa-html5 fa-2x text-danger"></i>
                </div>
                <div className="floating-element element-4">
                  <i className="fab fa-css3-alt fa-2x text-info"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 