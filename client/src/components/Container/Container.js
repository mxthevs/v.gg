import React, { Component } from "react";
import Form from "../Form/Form";
import { Wrapper } from "./styles";

export default class Container extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Digite seu nome de invocador</h1>
        <Form />
      </Wrapper>
    );
  }
}
