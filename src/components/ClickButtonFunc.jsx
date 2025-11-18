import React from "react";

function ClickButtonFunc() {
    function handleClick(par) {
        alert("Botão clicado com o parâmetro: " + par);
    }
    return (
        <button onClick={() => handleClick("teste")}>Clique aqui</button>
    );
}

export default ClickButtonFunc;