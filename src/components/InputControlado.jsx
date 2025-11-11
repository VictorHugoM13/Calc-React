import React, { Component } from "react";

export default class InputControlado extends Component {
  constructor() {
    super(); // não precisa de props
    this.state = {
      valor: "",       // guarda o texto digitado
      textoExibido: "" // guarda o texto que será mostrado no parágrafo
    };
  }

  handleChange = (event) => {
    this.setState({ valor: event.target.value });
  };

  handleClick = () => {
    this.setState({ textoExibido: this.state.valor });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.valor}
          onChange={this.handleChange}
          placeholder="Digite algo..."
        />
        <button onClick={this.handleClick}>Mostrar</button>

        <p>{this.state.textoExibido}</p>
      </div>
    );
  }
}
