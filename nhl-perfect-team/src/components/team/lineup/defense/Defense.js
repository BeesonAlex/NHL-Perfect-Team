import React, { Component } from 'react';
import Card from '../../../card/Card';

export class Defense extends Component {
  render() {
    return (
        <div className="team-lineup-defense-wrapper">
          <Card d={this.props.defensemen} />
          <Card d={this.props.defensemen} />
      </div>
    )
  }
}

export default Defense