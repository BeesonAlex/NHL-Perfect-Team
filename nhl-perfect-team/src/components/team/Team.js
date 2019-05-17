import React, { Component } from "react";
import "./Team.scss";

export class Team extends Component {
  render() {
    return (
      <div>
        <img
          className="team-logo"
          src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/6.svg"
          alt="boston-logo"
        />
        <img
          className="team-logo"
          src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg"
          alt="toronto-logo"
        />
      </div>
    );
  }
}

export default Team;
