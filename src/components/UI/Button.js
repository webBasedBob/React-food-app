import React, { Component } from "react";
import classes from "./Button.module.scss";

class Button extends Component {
  render() {
    const resolvedClass = this.props.className
      ? this.props.className
      : classes.button;
    return (
      <button {...this.props.config} className={resolvedClass}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
