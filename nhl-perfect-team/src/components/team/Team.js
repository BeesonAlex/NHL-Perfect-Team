import React, { Component } from "react";
import "./Team.scss";
import Lineup from './lineup/Lineup';

export class Team extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <div className="team-logo-wrapper">
        <img className = "team-logo__image" src={this.props.teamLogo} alt="team-logo" />
        </div>
        
        <Lineup />
        
        <div className="team-overall-wrapper">
        <h3 className="team-overall-label">Team Overall</h3>
        <h1 className="team-overall-value">function</h1>
        </div>
      </div>
    );
  }
}

export default Team;
