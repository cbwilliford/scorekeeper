import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import ResetScore from './ResetScore';


const Stats = () => {
  return(
    <Consumer>
      { context => {
        const totalPlayers = context.players.length;
        const totalScore = context.players.reduce(
          (total, player) => {
            return total + player.score;
          }, 0
        )
        return (
          <div>
            <table className="stats">
              <tbody>
                <tr>
                  <td>Players:</td>
                  <td>{totalPlayers}</td>
                </tr>
                <tr>
                  <td>Total Points:</td>
                  <td>{totalScore}</td>
                </tr>
              </tbody>
            </table>
            <ResetScore resetScores={context.actions.handleResetScores}/>
          </div>
        )
      }
      }
    </Consumer>
  )
}

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;