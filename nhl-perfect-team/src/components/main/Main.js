import React, { Component } from 'react'
import Team from '../team/Team'
import { bostonCenters, bostonLeftWings, bostonRightWings, bostonDefensemen, bostonGoalies, torontoCenters, torontoLeftWings, torontoRightWings, torontoDefensemen, torontoGoalies } from '../../data/playerData';

export class Main extends Component {

state = {
  boston: {
    logo: "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/6.svg",
    centers: bostonCenters,
    leftWings: bostonLeftWings,
    rightWings: bostonRightWings,
    defensemen: bostonDefensemen,
    goalies: bostonGoalies,
  },

  toronto: {
    logo: "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg",
    centers: torontoCenters,
    leftWings: torontoLeftWings,
    rightWings: torontoRightWings,
    defensemen: torontoDefensemen,
    goalies: torontoGoalies,
  }
  
}


  render() {
      console.log(this.state.boston)
      console.log(this.state.toronto)
    return (
      <div className="main-wrapper">
      <Team teamName={this.state.boston} />
      <Team teamName={this.state.toronto} />
      </div>
    )
  }
}

export default Main
