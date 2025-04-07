import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and best practices.',
      technologies: ['React', 'TypeScript', 'Bootstrap', 'CSS3'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-5 bg-dark">
      <Container>
        <h2 className="text-center mb-5 text-light">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <div className="project-card">
                <div className="project-content">
                  <h3 className="text-light mb-3">{project.title}</h3>
                  <p className="text-light mb-4">{project.description}</p>
                  <div className="project-technologies mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-primary me-2 mb-2">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} className="btn btn-outline-light me-2" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Demo
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects; 