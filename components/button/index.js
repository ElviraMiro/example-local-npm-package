import "./index.css";
import React, { Component } from 'react';

class EtoroxButton extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
  }
  
  render() {
    return (
        <button className="etorox-button">
            {this.props.buttonText}
        </button>
    );
  }
};

export default EtoroxButton;