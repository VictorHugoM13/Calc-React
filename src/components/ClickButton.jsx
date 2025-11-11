import React from "react";
function ClickButton() {
    function handleClick(){
        alert("Botão clicado");

    }

    return (
        <button onClick={handleClick}>Clique aqui</button>
    );
}

export default ClickButton;