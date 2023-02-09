import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <footer>
        <Col>
          <Row>
            <h4>Thank you for coming to my ted talk</h4>
            <Col>
            <a href="https://github.com/ThomasJay44">Github Link</a>
            </Col>
          </Row>
        </Col>
      </footer>
    </>
  );
};

export default Footer;
