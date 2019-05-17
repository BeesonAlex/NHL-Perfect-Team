import React, { Component } from 'react'
import Team from '../team/Team'
export class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">
      <Team teamName={this.state.boston} />
      <Team teamName={this.state.toronto} />
        
      </div>
    )
  }
}

export default Main
