import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../photo/hi.png";
const Home = () => {
    return (
        <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SUMAN MAITY</strong>
              </h1><br/>

              <h1 style={{fontSize: 30, paddingLeft: 45}}>Java Full Stack Developer</h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* <Type /> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
    );
};
 
export default Home;