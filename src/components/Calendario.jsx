import React, { Component, useState } from "react";  
// Importa o React e também Component (para criar componente de classe) e useState (para estado em componentes funcionais)

// Componente funcional que representa um único dia do mês
function Dia({ dia, eventos, onAdd, onEdit, onDelete }) {
  const [novoEvento, setNovoEvento] = useState(""); // Estado local para armazenar o texto do novo evento

  return (
    <div className="border rounded-xl bg-gray-200 shadow-md p-4 w-52 flex flex-col gap-2">
      {/* Título com o número do dia */}
      <h4 className="font-bold text-lg text-center text-gray-900">Dia {dia}</h4>

      {/* Se não existir nenhum evento, mostra a mensagem */}
      {eventos.length === 0 && (
        <p className="text-sm text-gray-600 text-center">Nenhum evento</p>
      )}

      {/* Lista os eventos já cadastrados */}
      {eventos.map((evento, index) => (
        <div key={index} className="flex items-center gap-2">
          {/* Campo para editar o texto do evento */}
          <input
            type="text"
            value={evento}
            onChange={(e) => onEdit(dia, index, e.target.value)} // Chama a função do pai passando o novo texto
            className="flex-1 border rounded p-1 text-sm outline-none bg-white text-gray-900"
          />

          {/* Botão para remover o evento */}
          <button
            onClick={() => onDelete(dia, index)} // Aciona a função de remover no componente pai
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm"
          >
            X
          </button>
        </div>
      ))}

      {/* Campo para adicionar novos eventos */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Novo evento"
          value={novoEvento}
          onChange={(e) => setNovoEvento(e.target.value)} // Atualiza o estado com o que está sendo digitado
          className="flex-1 border rounded p-1 text-sm outline-none bg-white text-gray-900"
        />

        <button
          onClick={() => {
            if (!novoEvento) return; // Evita adicionar evento vazio
            onAdd(dia, novoEvento); // Chama função do pai passando o novo evento
            setNovoEvento(""); // Limpa o campo após adicionar
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded text-sm"
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
      eventos: {} // Objeto onde cada chave será um dia e o valor será um array de eventos
    };
  }

  // Adiciona um evento no dia informado
  adicionarEvento = (dia, evento) => {
    this.setState((prev) => ({
      eventos: {
        ...prev.eventos, // Mantém os eventos antigos
        [dia]: [...(prev.eventos[dia] || []), evento] // Adiciona o novo evento à lista daquele dia
      }
    }));
  };

  // Edita um evento já existente
  editarEvento = (dia, indice, novoTexto) => {
    const atuais = this.state.eventos[dia] || [];
    const eventosDoDia = [...atuais]; // Cria cópia do array para não modificar diretamente
    eventosDoDia[indice] = novoTexto; // Troca o texto
    this.setState((prev) => ({
      eventos: { ...prev.eventos, [dia]: eventosDoDia }
    }));
  };

  // Remove um evento da lista
  removerEvento = (dia, indice) => {
    const atuais = this.state.eventos[dia] || [];
    const eventosDoDia = [...atuais];
    eventosDoDia.splice(indice, 1); // Remove o item do array
    this.setState((prev) => ({
      eventos: { ...prev.eventos, [dia]: eventosDoDia }
    }));
  };

  render() {
    const dias = Array.from({ length: 30 }, (_, i) => i + 1); // Cria um array de 1 até 30

    return (
      <div className="min-h-screen bg-gray-300 p-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          📅 Calendário Interativo
        </h2>

        {/* Renderiza 30 cards, um para cada dia */}
        <div className="flex flex-wrap gap-4 justify-center">
          {dias.map((dia) => (
            <Dia
              key={dia}
              dia={dia}
              eventos={this.state.eventos[dia] || []} // Passa os eventos daquele dia
              onAdd={this.adicionarEvento}
              onEdit={this.editarEvento}
              onDelete={this.removerEvento}
            />
          ))}
        </div>
      </div>
    );
  }
}
