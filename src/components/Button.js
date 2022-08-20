import React from "react";
import "../stylesheets/Button.css";


export class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const text = this.props.text;
    this.props.onClick(text);
  }

  removeHandle() {
    const text = this.props.text;
    this.props.delete(text);
  }

  render() {
    const text = this.props.text;
    const allOperators = ['+', '-', '*', '/', 'AC', '%', '~', '='];
    return (
      <div
        className={allOperators.includes(text) ? 'button-container operator' : 'button-container'}
        onClick={this.handleClick}>
        {this.props.text}
      </div>
    )
  }
}