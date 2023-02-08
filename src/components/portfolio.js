import React from "react";
import { projects } from "../projectsArray";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Portfolio = () => {
  return (
    <div>
      <Container>
        <Col>
          <Row>
            <h4 id="portHeader">Here Are Some Of My Recent Projects</h4>
          </Row>
        </Col>

        <Row>
          {projects.map((project) => (
            <Col class="text-center" md={6}>
              <Row><h4>{project.name}</h4></Row>
              <Row><p>{project.description}</p></Row>
              <Row><a>{project.tech}</a></Row>
              <Row>
                <a href={project.repoLink}>
                  <img
                    className="projPictures"
                    src={project.ss}
                    alt={project.alt}
                  />
                </a>{" "}
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
