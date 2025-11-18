import React, { Component } from "react";

export default class ToggleTexto extends Component {
    constructor() {
      super();
      this.state = { visivel: true };
    }
    alternar = () => {
      this.setState({visivel: !this.state.visivel});
    }
    
}