import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import Button from 'react-bootstrap/Button';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";

type BootstrapLayoutProps = {
  children: React.ReactNode;
};

export const BootstrapLayout = (props: BootstrapLayoutProps) => {
  return (
    <Container fluid="lg">
      <Row>
        <Navbar expand="md" bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" >CPaaS Demo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/ping" >Ping</Nav.Link>
                <Nav.Link as={Link} to="/bootstrap" >Bootstrap</Nav.Link>
                <Nav.Link as={Link} to="/protected" >Protected</Nav.Link>
              </Nav>
              <NavAuth />

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

interface IUserData {
  name: string;
  uuid: string;
};

const NavAuth = () => {
  const isAuthenticated = useIsAuthenticated()
  const signOut = useSignOut()
  const navigate = useNavigate()

  const authUser = useAuthUser<IUserData | null>()
  console.log(authUser)
  const name = authUser?.name;
  // const uuid = authUser.uuid;

  const signin = () => {
    navigate("/signin")
  }

  const signout = () => {
    signOut()
    navigate("/signin")
  }

  if (isAuthenticated) {
    return <>
      <Navbar.Text>You are signed in as: {name}&nbsp;&nbsp;</Navbar.Text>
      <Button variant="outline-light" onClick={signout}>SignOut</Button>
    </>
  }
  return <>
    <Navbar.Text>You are not signed in!&nbsp;&nbsp;</Navbar.Text>
    <Button variant="outline-light" onClick={signin}>SignIn</Button>
  </>
};


