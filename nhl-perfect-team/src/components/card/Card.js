import React, { Component } from "react";
import "./Card.scss";

export class Card extends Component {
  render() {
    return (
      <>
        <div className="boston-card">
          <img
            className="boston-card__image"
            src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/6.svg"
            alt="boston-logo"
          />
        </div>
        <div className="boston-player">
          <h3 className="boston-player__name-ovr">Zdeno Chara</h3>
          <img
            className="boston-player__image"
            src="https://nhl.bamcontent.com/images/headshots/current/168x168/8465009.jpg"
            alt="players-headshot"
          />
          <h2 className="boston-player__name-ovr">OVR 85</h2>
        </div>
        <div className="toronto-card">
          <img
            className="toronto-card__image"
            src="https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/10.svg"
            alt="toronto-logo"
          />
        </div>
        <div className="toronto-player">
          <h3 className="toronto-player__name-ovr">John Tavares</h3>
          <img
            className="toronto-player__image"
            src="https://nhl.bamcontent.com/images/headshots/current/168x168/8475166.jpg"
            alt="players-headshot"
          />
          <h2 className="toronto-player__name-ovr">OVR 90</h2>
        </div>
      </>
    );
  }
}

export default Card;
