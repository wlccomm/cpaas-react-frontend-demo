import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const BootstrapLayout = (props: LayoutProps) => {
  return (
    <Container fluid="lg">
      <Row>
        <Col>
          <Link to="/">Home</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/bootstrap">Bootstrap</Link>
          &nbsp;&nbsp;&nbsp;
          <hr />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
