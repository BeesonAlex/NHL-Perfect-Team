import React, { Component } from "react";
import "./Card.scss";

export class Card extends Component {
  render() {
    return (
      <div className = "player-card player-card--empty">
      <img className="player-card__team-logo" src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/6.svg" alt="boston-logo" />
      </div>

    );
  }
}

export default Card;
