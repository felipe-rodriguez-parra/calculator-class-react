import React from "react";
import "../stylesheets/Screen.css";


export class Screen extends React.Component {

  render() {
    return (
      <div className="screen-container">
        <div className="screen-container-text">
          {this.props.screen}
        </div>
      </div>
    )
  }
}