import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type BootstrapLayoutProps = {
  children: React.ReactNode;
};

export const BootstrapLayout = (props: BootstrapLayoutProps) => {
  return (
    <Container fluid="lg">
      <Row>
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" >CPaaS Demo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/ping" >Ping</Nav.Link>
                <Nav.Link as={Link} to="/bootstrap" >Bootstrap</Nav.Link>
                <Nav.Link as={Link} to="/signin" >Signin</Nav.Link>
                <Nav.Link as={Link} to="/protected" >Protected</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
