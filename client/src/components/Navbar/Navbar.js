import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, NavTitle} from './styles';

export default class Navbar extends Component {
  render() {
    return (
        <>
            <Router>
                <Container>
                    <NavTitle>
                        <Link to="/">
                            {this.props.text}
                        </Link>
                    </NavTitle>                
                </Container>
            </Router>
        </>
    );
  }
}
