import React from "react";

export class ClickButtonClass extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Botão clicado!");
  }

  render() {
    return <button onClick={this.handleClick}>Clique aqui</button>;
  }
}
