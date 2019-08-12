import React, { Component } from 'react';
import { Container } from './styles';

export default class Form extends Component {
  render() {
    return (
        <Container>
            <form action="/search" method="post">
                <input type="text" name="summonerName" id="summonerNameInput"/>
                <input type="submit" value="Buscar Histórico"/>
            </form>
        </Container>
    );
  }
}
