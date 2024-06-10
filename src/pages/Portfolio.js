import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

const Portfolio = () => {
    
 
    return (
        <Container fluid className="project-section">
        <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Healthcare Inventory Management System"
              description="The Healthcare Inventory Management System project aims to develop an efficient solution for managing medical supplies and equipment within healthcare facilities."
              ghLink="https://github.com/sommaity/Healthcare-React"
              demoLink="https://healthcare.sumansom.site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="KP Member Registration Portal"
              description="KP member to assign caregiver(members only) for themselves. It provides facilities like member registration, login, search caregiver, assign caregiver to the user"
              ghLink="https://github.com/sommaity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Comming Soon"
              ghLink="https://github.com/sommaity"
            />
          </Col>

        </Row>
      </Container>
    </Container>
        
    );
};
 
export default Portfolio;