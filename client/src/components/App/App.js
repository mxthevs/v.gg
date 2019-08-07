import React, { Component } from 'react';
import { GlobalStyle } from './styles';
import Navbar from '../Navbar/Navbar';

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Navbar text="V.gg"/>
            </>
        );
    }
}

export default App;
