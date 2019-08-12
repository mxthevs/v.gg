import React, { Component } from 'react';
import { GlobalStyle } from './styles';
import Navbar from '../Navbar/Navbar';
import Container from '../Container/Container';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Navbar text="V.gg"/>
                <Container />
            </>
        );
    }
}

export default App;
