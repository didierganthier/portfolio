import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Didier Peran Ganthier',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Be Limitless',
        subtitle: 'Creative thinking never ends',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s talk',
      },
    }   
  }

  render (){
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar>
            <Navbar.Brand>Didier Peran Ganthier</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
