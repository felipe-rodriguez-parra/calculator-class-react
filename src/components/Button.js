import React from "react";
import "../stylesheets/Button.css";


export class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const number = e.target.value;
    this.props.onChange(number);
  }

  render(){
    return(
      <>
        {this.props.name}
      </>
    )
  }
}