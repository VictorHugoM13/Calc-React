export const MorningGreeting = () => {
  return (
    <div>
      <h2>Good Morning!</h2>
    </div>
  );
};

// Componente de classe
import { Component } from "react";

export class EveningGreeting extends Component {
  render() {
    return (
      <div>
        <h2>Good Evening!</h2>
      </div>
    );
  }
}