import { Container, Row, Col, Card } from "react-bootstrap";

export default function Projects() {
  const projectList = [
    { title: "E-Commerce Platform", desc: "A full-featured store with payment gateway integration and real-time inventory.", img: "https://th.bing.com/th/id/OIP.T05jxZoVhhkyNFUxmPKUvwHaE8?w=336&h=183&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    { title: "Task Management Tool", desc: "A productivity app featuring drag-and-drop tasks and team collaboration suites.", img: "https://th.bing.com/th/id/OIP.lUoe3FspWx_Po8Z0RICPmwHaEL?w=295&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    { title: "Weather Dashboard", desc: "Visualizing real-time weather data with dynamic charts and geolocation support.", img: "https://th.bing.com/th/id/OIP.Eeqzr5-nicuBZbISIxbobAHaFH?w=227&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
  ];

  return (
    <Container className="py-5" id="projects">
      <h2 className="text-center mb-4">Projects</h2>

      <Row>
        {projectList.map((p, index) => (
          <Col key={index} lg={4} md={6} className="mb-4">
            <Card className="project-card shadow-sm">
              <Card.Img variant="top" src={p.img} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}