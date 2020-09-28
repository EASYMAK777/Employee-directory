import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

function Directory() {
    return (
        <div className="jumbotron text-center">
            <div className="jumbotron-body">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h1>
                                GREED CORP CENTRAL EMPLOYEE DIRECTORY
                            </h1>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>ID #</th>
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
            </div>
        </div>
    );
}

export default Directory;