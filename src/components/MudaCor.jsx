import React, { useState } from "react";

export default function MudaCor() {
  const [cor, setCor] = useState("blue"); // estado inicial: azul

  const alternarCor = () => {
    setCor(cor === "blue" ? "red" : "blue"); // alterna entre azul e vermelho
  };

  return (
    <div>
      <p style={{ color: cor }}>Este texto muda de cor!</p>
      <button onClick={alternarCor}>Mudar cor</button>
    </div>
  );
}
