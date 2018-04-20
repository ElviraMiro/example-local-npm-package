import "./index.css";
import React, { Component } from 'react';

export class ElviraBanner extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS", props);
  }
  
  render() {
    return (
        <div className="banner">{this.props.text}</div>
    );
  }
};
