import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Counter from './Counter';
import Crown from './Crown';

const Player = ({index,highScore}) => {
    return (
      <div className="player">
        <Consumer>
          { ({actions, players}) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.handleRemovePlayer(players[index].id)}>✖</button>
              <Crown highScore={ highScore }/>
              { players[index].name }
            </span>
          )
          }
        </Consumer>
        <Counter index={index}/>
      </div>
    );
  }

Player.propTypes = {
  index: PropTypes.number,
  highScore: PropTypes.bool
}

export default Player;
