import React from "react";
import "../stylesheets/Button.css";


export class Button extends React.Component {
  

  render(){
    return(
      <>
        {this.props.name}
      </>
    )
  }
}