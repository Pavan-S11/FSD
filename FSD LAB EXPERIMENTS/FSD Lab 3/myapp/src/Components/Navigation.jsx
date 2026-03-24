import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" className="py-3 shadow-sm">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>

        <Nav className="d-flex flex-row gap-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}