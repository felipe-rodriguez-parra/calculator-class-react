import React from "react";
import "../stylesheets/Screen.css";


export class Screen extends React.Component {
  render() {
    const screen = this.props.screen;
    return (
      <div className="screen-container">
        <div className="screen-container-text">
          {screen}
        </div>
      </div>
    )
  }
}