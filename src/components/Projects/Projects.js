import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import wheather from "../../Assets/Projects/wheather.png"
import vendor from "../../Assets/Projects/vendor.png"
import todo_list from "../../Assets/Projects/todo.png"



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
              imgPath={vendor}
              isBlog={false}
              title="Vendor"
              description="It is a vendor management project where i use Python,Django,Javascript,Sql,DRF,REST Api.  "
              ghLink="https://github.com/suchibratarout/vendor_management"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo_list}
              isBlog={false}
              title="todo_list"
              description=" "
              ghLink="https://github.com/suchibratahttps://github.com/suchibratarout/todo-app-reactrout/vendor_management"
              
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
