import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-3 bg-dark text-light text-center">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer; 