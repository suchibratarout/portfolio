import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import wheather from "../../Assets/Projects/wheather.png"
import Book from "../../Assets/Projects/bookstore.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={wheather}
              isBlog={false}
              title="wheather"
              description="A weather app made using JavaScript,Html and CSS. The app tells the current temperature. "
              ghLink="https://github.com/suchibratarout/suchibratarout.github.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Book Store"
              description="A book store  where we can buy books. This app made using Python,Django and Javascript.  "
              ghLink="https://github.com/suchibratarout/Ecomm"
              
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
