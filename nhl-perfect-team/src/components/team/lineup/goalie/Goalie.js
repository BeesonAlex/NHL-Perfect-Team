import React, { Component } from 'react';
import Card from '../../../card/Card';

export class Goalie extends Component {
  render() {
    return (
    <div className="team-lineup-goalie-wrapper">
        <Card g={this.props.goalies} />
    </div>
    )
  }
}

export default Goalie