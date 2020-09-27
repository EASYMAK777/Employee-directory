import React from 'react';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Directory from "./Components/Directory"

import './App.css';

import { Button, Alert, Breadcrumb, Jumbotron, Container, Row, Navbar} from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <React.Component>
      <Router>
        <Switch>
          <Route exact path ="/" Component={Home}/>
          <Route exact path ="/login" Component={Login}/>
          <Route exact path ="/signup" Component={Sign-up}/>
          <Route exact path ="/directory" Component={Directory}/>
          
        </Switch>
      </Router>


    </React.Component>
  );
}

export default App;
