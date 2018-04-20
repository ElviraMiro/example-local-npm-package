import "./index.css";
import React, { Component } from 'react';

export class EtoroxButton extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
  }
  
  render() {
    return (
        <button className="etorox-button">
            {this.props.buttonText?this.props.buttonText:"Button"}
        </button>
    );
  }
};
