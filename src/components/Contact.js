import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const [isWrong, setIsWrong] = useState("name");
  const [formError, setFormError] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

  const handleFormChange = (e) => {
    // if (e.target.name === 'email' && !isEmail.test(e.target.value)) {
    //   return;
    // }
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setFormError(false);
  };

  const handleBlur = (e) => {
    console.log(e.target.name);
    if (!e.target.value) {
      setFormError(true);
      setIsWrong(e.target.name);
    } else {
      console.log("thanks for filling it in");
      setFormError(false);
    }
  };
  console.log();

  return (
    <>
      <h4>Contact Me: </h4>
      <Form>
        <Col>
          <Row className="mb-3">
            {formError && <h2> {isWrong} is required </h2>}

            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleFormChange}
                onBlur={handleBlur}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                onChange={handleFormChange}
                onBlur={handleBlur}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                type="text"
                onChange={handleFormChange}
                onBlur={handleBlur}
              />
            </Form.Group>
          </Row>
        </Col>
        <br />
        <Col>
          <Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export default Contact;
