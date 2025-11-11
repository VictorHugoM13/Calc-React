import React, { Component } from "react";

export default class ListaDeTarefas extends Component {
  constructor() {
    super(); // não passa props porque não usa nada vindo de fora
    this.state = {
      novaTarefa: "",
      tarefas: []
    };
  }

  // Atualiza o valor digitado no input
  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  };

  // Adiciona a nova tarefa na lista
  adicionarTarefa = () => {
    if (this.state.novaTarefa.trim() === "") return; // evita tarefas vazias

    this.setState((prevState) => ({
      tarefas: [...prevState.tarefas, prevState.novaTarefa],
      novaTarefa: "" // limpa o input depois de adicionar
    }));
  };

  render() {
    return (
      <div>
        <h2>Lista de Tarefas</h2>

        <input
          type="text"
          value={this.state.novaTarefa}
          onChange={this.handleChange}
          placeholder="Digite uma tarefa"
        />
        <button onClick={this.adicionarTarefa}>Adicionar</button>

        <ul>
          {this.state.tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      </div>
    );
  }
}
