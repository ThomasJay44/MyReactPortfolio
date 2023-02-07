import React from "react";

const Contact = () => {
  return (
    <>
      <h4>Contact Me: </h4>
    <Form>
      <Row className="mb-3">

      <Form.Group as={Col} >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" type="text" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
};

export default Contact;
