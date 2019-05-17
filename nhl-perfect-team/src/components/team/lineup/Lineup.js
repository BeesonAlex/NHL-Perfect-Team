import React, { Component } from 'react';
import Forwards from './forwards/Forwards';
import Defense from './defense/Defense';
import Goalie from './goalie/Goalie';

export class Lineup extends Component {
  render() {
    return (
      <div className="team-lineup-wrapper">
        <Forwards lw={this.props.leftWings} c={this.props.centers} rw={this.props.rightWings} />
      
        <Defense d={this.props.defensemen} />

        <Goalie g={this.props.goalies} />
      </div>
    )
  }
}

export default Lineup
