import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>

      <Form className="mx-auto" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message..." />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Send
        </Button>
      </Form>
    </Container>
  );
}