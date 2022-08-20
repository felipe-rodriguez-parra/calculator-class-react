import React from "react";
import "../stylesheets/Button.css";


export class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    const text = this.props.text;
    this.props.onClick(text);

  }

  render(){
    return(
      <div 
        className="button-container"
        onClick={this.handleClick}>
        {this.props.text}
      </div>
    )
  }
}