import React from "react";

export class ClickButtonPar extends React.Component {
    handleClick = (par) => {
        alert("Botão clicado com o parâmetro: " + par);
    }
    render() {
        return (
            <button onClick={() => this.handleClick("teste")}>Clique aqui</button>
        );
    }
}