import React, { Component, useState } from "react";

function Dia({ dia, eventos, onAdd, onEdit, onDelete}) {
  const [novoEvento, setNovoEvento] = useState("");

  return (
    <div className="border rounded-xl bg-gray-200 shadow-md p-4 w-52 flex flex-col gap-2">
      <h3 className="font-bold text-lg text-center text-gray-900">Dia {dia}</h3>

      {eventos.length === 0 && (
        <p className="text-sm text-gray-600 text-center">Nenhum evento</p>
      )}

      {eventos.map((evento, index) => (
        <div key={index} className="flex items-center gap-2">
          <input type="text" 
            value={evento}
            onChange={(e)=> onEdit(dia, index, e.target.value)}
            className="flex-1 border rounded text-sm outline-none bg-white text-gray-900"
          />
          <button
            onClick={() => onDelete(dia, index)}
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm"
          >
            X
          </button>
        </div>
      ))}

      <div className="flex gap-2">
        <input type="text"
            placeholder="Novo evento"
            value={novoEvento}
            onChange={(e)=> setNovoEvento(e.target.value)}
            className="flex-1 border rounded text-sm outline-none bg-white text-gray-900"
          />
          <button
            onClick={() => {
              if (!novoEvento) return;
              onAdd(dia, novoEvento);
              setNovoEvento("");
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-sm"
          >
            +
          </button>
      </div>

    </div>
  );
}

export default class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventos: {}
    };
  }

  adcionarEvento = (dia, evento) => {
    this.setState((prev) => ({
      eventos: {
        ...prev.eventos, 
        [dia]: [...(prev.eventos[dia] || []), evento]
      }
    }));
  };

  editarEvento = (dia, indice, novoEvento) => {
    const atuais = this.state.eventos[dia] || [];
    const eventosDoDia = [...atuais];
  }

}