import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="py-2" style={{ backgroundColor: "#0000001a" }}>
        <Container fluid>
          <Navbar.Brand href="#" className="logo m-0 text-light"><h2>Expert</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-3 me-auto mb-4 my-lg-0 "
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#" className="link-light">About</Nav.Link>
              <Nav.Link href="#" className="link-light">Store</Nav.Link>
              <Nav.Link href="#" className="link-light">
                FaQs
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light" style={{transition: "0.5s"}}>
                <FontAwesomeIcon icon={faSearch} /></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Nav className="justify-content-center py-2" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#" className="link-light">Portraits</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="link-light">Arquitecture</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="link-light">Animals</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="link-light">Landscape</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="link-light">Surreal</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navigation;