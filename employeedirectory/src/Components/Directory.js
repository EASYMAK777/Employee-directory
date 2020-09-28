class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

























// import React from 'react';
// import { Container, Row, Col, Table } from 'react-bootstrap';
// import axios from 'axios';

// const api = axios.create({
//     baseURL: 
// })

// function Directory() {
//     return (
//         <div className="jumbotron text-center">
//             <div className="jumbotron-body">
//                 <Container>
//                     <Row className="text-center">
//                         <Col>
//                             <h1>
//                                 GREED CORP CENTRAL EMPLOYEE DIRECTORY
//                             </h1>
//                             <Table striped bordered hover size="sm">
//                                 <thead>
//                                     <tr>
//                                         <th>ID #</th>
//                                         <th>First Name</th>
//                                         <th>Last Name</th>
//                                         <th>Username</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>1</td>
//                                         <td>Mark</td>
//                                         <td>Otto</td>
//                                         <td>@mdo</td>
//                                     </tr>
//                                     <tr>
//                                         <td>2</td>
//                                         <td>Jacob</td>
//                                         <td>Thornton</td>
//                                         <td>@fat</td>
//                                     </tr>
//                                     <tr>
//                                         <td>3</td>
//                                         <td>Larry</td>
//                                         <td>Bird</td>
//                                         <td>@twitter</td>
//                                     </tr>
//                                 </tbody>
//                             </Table>

//                         </Col>

//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// }

// export default Directory;