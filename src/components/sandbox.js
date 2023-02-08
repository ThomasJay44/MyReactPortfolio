import React, { useState } from "react";
//bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({ show: false, name: "", message: "" });

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  console.log(formData);

  const handleBlur = (event) => {
    if (!event.target.value) {
      setError({
        show: true,
        name: event.target.name,
        message: `${event.target.name} is required`,
      });
    } else if (
      event.target.name === "email" &&
      !validEmail.test(event.target.value)
    ) {
      setError({
        show: true,
        name: event.target.name,
        message: `this is not an email!`,
      });
    }
  };

  const handleChange = (event) => {
    // [] makes it a key
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact container">
      <h2>Contact</h2>
      <Form className="form login-form ">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={1}>
            name:
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              className="form-input"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Col>
          {error.show && error.name === "name" && <h1>{error.message}</h1>}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={1}>
            email:
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              className="form-input"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Col>
          {error.show && error.name === "email" && <h1>{error.message}</h1>}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={1}>
            message:
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              as="textarea"
              className="form-input"
              type="text"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </Col>
          {error.show && error.name === "message" && <h1>{error.message}</h1>}
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Button type="submit">submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Contact;
