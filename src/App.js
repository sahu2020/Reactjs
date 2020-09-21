import "./App.css";
import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Footer from "../src/components/footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import {
  signInWithGoogle,
} from "./firebase/firebase.utils";

function App() {

  
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Navbar className="bg-light justify-content-between">
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                  <Button type="submit">Submit</Button>
                </Form>
              </Navbar>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <button onClick={ signInWithGoogle }> SignIn</button>
        </Col>
      </Row>
      <Row>
        <Col className="footer">
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
