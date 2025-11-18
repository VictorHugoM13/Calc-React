import React from "react";

export default class CounterClass extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
            <div>
                <h1>Estado: {this.state.count}</h1>
                <button onClick={this.increment}>Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
            </div>
        );
    }
}