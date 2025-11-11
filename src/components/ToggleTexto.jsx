import React, { Component } from "react";

export default class ToggleTexto extends Component {
  constructor() {
    super(); // não precisa de props
    this.state = { visivel: true };
  }

  alternar = () => {
    this.setState({ visivel: !this.state.visivel });
  };

  render() {
    return (
      <div>
        <button onClick={this.alternar}>
          {this.state.visivel ? "Ocultar" : "Mostrar"}
        </button>

        {this.state.visivel && <p>Este é o texto visível!</p>}
      </div>
    );
  }
}
