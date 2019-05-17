import React, { Component } from 'react';
import Forwards from './forwards/Forwards';
import Defense from './defense/Defense';
import Goalie from './goalie/Goalie';

export class Lineup extends Component {
  render() {
    return (
      <div className="team-lineup-wrapper">
      <div className="team-lineup-forwards-wrapper">
        <Forwards />
      </div>
      <div className="team-lineup-defense-wrapper">
        <Defense />
      </div>
      <div className="team-lineup-goalie-wrapper">
        <Goalie />
      </div>
      </div>
    )
  }
}

export default Lineup
