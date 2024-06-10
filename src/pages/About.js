import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const About = () => {
    return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "1px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "1px",
              paddingBottom: "5px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "5px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Suman Maity </span>
                        from <span className="purple"> Kolkata, India.</span>
                        <br />
                        I am currently employed as a <strong className="purple">full stack java developer</strong> at Cognizant Technology.
                        <br />
                        I have completed bachelor in technology(B.Tech) in <strong className="purple">Computer Science and Engineering </strong> 
                        at <strong className="purple"> Haldia Institute of Technology.</strong>
                    </p>

                    </blockquote>
                </Card.Body>
            </Card>
          
        
        <h1 className="project-heading">
          My Professional <strong className="purple">Skills </strong>
        </h1>
        <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        My Skillsets are:
                        Core Java, Spring Boot, HTML, CSS, Java Script
                        Maven, React JS, Mongo DB, MySQL 
                    </p>

                    </blockquote>
                </Card.Body>
            </Card>
            </Col>
            </Row>
      </Container>
    </Container>
    );
};
 
export default About;