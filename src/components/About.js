import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mePhoto from "../images/meoncliffs.JPG";
import lily from "../images/lily.jpg";
import tomates from "../images/rainbowtomates.jpg";

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Container>
        <Row>
          <Col>
            <img className="photos" src={tomates} />
          </Col>
          <Col>
            <img className="photos" src={mePhoto} />
          </Col>
          <Col>
            <img className="photos" src={lily} />
          </Col>
        </Row>
        <Row>
          <p className="aboutMeText">
            "Did you ever hear the tragedy of Darth Plagueis the Wise?" "No." "I
            thought not. It's not a story the Jedi would tell you. It's a Sith
            legend. Darth Plagueis... was a Dark Lord of the Sith so powerful
            and so wise, he could use the Force to influence the
            midi-chlorians... to create... life. He had such a knowledge of the
            dark side, he could even keep the ones he cared about... from
            dying." "He could actually... save people from death?" "The dark
            side of the Force is a pathway to many abilities... some consider to
            be unnatural." "Wh– What happened to him?" "He became so powerful,
            the only thing he was afraid of was... losing his power. Which
            eventually, of course, he did. Unfortunately, he taught his
            apprentice everything he knew. Then his apprentice killed him in his
            sleep. It's ironic. He could save others from death, but not
            himself." "Is it possible to learn this power?" "Not from a Jedi."
          </p>
        </Row>
        <div ClassName="buttonDiv">
          <Button className="button" onClick={() => setCurrentPage("Contact")}>
            Contact Me Here{" "}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default About;
