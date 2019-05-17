import React, { Component } from 'react';
import Card from '../../../card/Card';

export class Forwards extends Component {
  render() {
    return (
      <div className="team-lineup-forwards-wrapper">
        <Card lw={this.props.leftWings} />
        <Card c={this.props.centers} />
        <Card lw={this.props.rightWings} />
      </div>
    )
  }
}

export default Forwards
