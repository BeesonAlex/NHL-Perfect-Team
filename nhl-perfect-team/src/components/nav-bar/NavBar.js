import React, { Component } from "react";
import "./NavBar.scss";

export class NavBar extends Component {
  render() {
    return (
      <div className="logo">
        <h1>Perfect</h1>
        <img
          src="http://content.sportslogos.net/leagues/thumbs/1.gif"
          alt="nhl logo"
        />
        <h1>Team</h1>
      </div>
    );
  }
}

export default NavBar;
