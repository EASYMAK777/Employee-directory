import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Col } from 'react-bootstrap';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid='xl'>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Greed Corp Employee Directory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="Sort By" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">By Name</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">By Id</NavDropdown.Item>
                      <NavDropdown.Divider />
                   </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            
          </Row>

        </Container>







      </header>
    </div>
  );
}

export default App;
