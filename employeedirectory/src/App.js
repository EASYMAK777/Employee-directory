import React from 'react';
import { Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Col, Table } from 'react-bootstrap';





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


          <Row className="text-center">
            <Col>
              <h1>EMPLOYEE DIRECTORY BY NAME</h1>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

        </Container>







      </header>
    </div>
  );
}

export default App;
