import { Container, Badge } from "react-bootstrap";

export default function Hero() {
  return (
    <Container className="py-5 text-center" id="home">
      <Badge bg="primary" className="mb-3">Welcome</Badge>

      <h1 className="display-4 fw-bold">Hi, I'm a React Developer</h1>
      <p className="lead mt-3">
        I build responsive, interactive websites using modern technologies.
      </p>
    </Container>
  );
}