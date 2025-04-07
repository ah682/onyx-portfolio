import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-5 text-light">About Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <div className="about-content">
              <h3 className="text-primary mb-4">Who am I?</h3>
              <p className="text-light mb-4">
                I am a passionate software developer with expertise in building modern web applications.
                My journey in programming started with a simple "Hello World" and has evolved into creating
                complex, user-friendly applications that solve real-world problems.
              </p>
              <p className="text-light">
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                technologies and best practices in web development.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="skills-section">
              <h3 className="text-light mb-4">My Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-light">{skill.name}</span>
                    <span className="text-light">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div 
                      className="progress-bar bg-primary" 
                      role="progressbar" 
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level} 
                      aria-valuemin={0} 
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 