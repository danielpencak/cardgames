import React, { Component } from 'react';

export default class GoFish extends Component {
  render() {
    return (
      <div className="GoFish">
        <div id="computer">
          {/* Computer's game terminal */}
          <span id="computerCards">
            {/* Computer's hand created with JavaScript */}
          </span>

          <div className="container">
            {/* Computer Scoreboard */}
            <div className="row">
              <div className="col s12 m6">
                <h3 className="score left-align" id="computerScore">Pairs: 0</h3>
              </div>
              <div className="col s12 m6">
                <h3 className="player right-align" id="computerTurn">Computer</h3>
              </div>
            </div>
          </div>
        </div>

      <div>
        <div id="game">
          {/* Deck and Go Fish! button */}
          {/* <img alt="Deck of Cards" className="responsive-img" id="deck" src={cardBack} /> */}
          <a className="waves-effect btn z-depth-5" id="goFish">
            GO FISH!
          </a>
        </div>
      </div>

      <div id="user">
        {/* User's game terminal */}
        <div className="container">
          {/* User Scoreboard */}
          <div className="row">
            <div className="col s12 m6">
              <h3 className="score left-align" id="userScore">Pairs: 0</h3>
            </div>
            <div className="col s12 m6">
              <h3 className="player right-align" id="userTurn">User</h3>
            </div>
          </div>
        </div>

        <span id="userCards">
          {/* User's hand created with JavaScript */}
        </span>
      </div>
      </div>
    );
  }
}
