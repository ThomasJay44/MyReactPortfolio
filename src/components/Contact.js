import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Contact = () => {
  // const [isWrong, setIsWrong] = useState("name");
  const [formError, setFormError] = useState({show: false, name:" ", message: " "});
  const [formState, setFormState] = useState({
    name: " ",
    email: " ",
    message: " ", 
  });
  const isEmail = new RegExp (`^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$`);

  const handleFormChange = (e) => {
    // if (e.target.name === 'email' && !isEmail.test(e.target.value)) {
    //   return;
    // }
    setFormState({ ...formState, [e.target.name]: e.target.value });
    // setFormError(false);
  };

  const handleBlur = (e) => {
    // console.log(e.target.name); 
    if (!e.target.value) {
      setFormError({
        show: true,
        name: e.target.name,
        message: ` Please input a/an ${e.target.name}`,
      });
      // setIsWrong(e.target.name);
    } else if (e.target.name === "email"&& !isEmail.test(e.target.value)) {
      // console.log("thanks for filling it in");
      setFormError({ show:true, name: e.target.name, message: `Please enter a valid email`});
    }
  };
  console.log();

  return (
    <>
    <div className="contact container">
      <h4>Contact Me:</h4>
      <Form>
        <Col>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={handleFormChange}
                onBlur={handleBlur}
                required
                className="form-input"
              />
              {formError.show && formError.name === "name" && <h3>{formError.message}</h3>}
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
                required
                className="form-input"
              />
              {formError.show && formError.email === "email" && <h3>{formError.message}</h3>}
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
                required
                className="form-input"
              />
              {formError.show && formError.message === "message" && <h3>{formError.message}</h3>}
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
      </div>
    </>
  );
};

export default Contact;
