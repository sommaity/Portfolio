import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../photo/Resume.pdf";
import Card from "react-bootstrap/Card";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
const Contact = () => {
    
    return (
        <div>
        <Container fluid className="about-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "1px",
              paddingBottom: "5px",
            }}
          >
        <h1 className="project-heading">
          <strong className="purple">Contact Details </strong>
        </h1>
        <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "center"}}>
                        <IoMdMail /> <a href="mailto:sommaity25d@gmail.com">sommaity25d@gmail.com</a>
                        <br />
                        <IoMdCall /> <a href="tel:+918670089501">+918670089501</a>
                        <br />
                        <FaLocationDot /> <a href="https://maps.app.goo.gl/Ryj6mo4erk2WYVdR7">
                            Kolkata, West Bengal, India</a>
                        <br />
                        <CgWebsite /> <a href="https://sumansom.site">https://sumansom.site</a>
                        <br />
                        <FaLinkedin /> <a href="https://linkedin.com/in/suman-maity-302335188">suman-maity-302335188</a>
                        <br/>
                        <FaGithub /> <a href="https://github.com/sommaity">sommaity</a>
                    </p>

                    </blockquote>
                </Card.Body>
            </Card>

            
            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </Button>
            
            </Col>
            </Row>
        </Container>
        </div>
    );
};
 
export default Contact;