import React from 'react';
import {Consumer} from './Context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" />
      <Consumer>
        { context => (
          context.players.map( (player, index) =>
            <Player
              index={index}
              highScore={context.actions.getHighestScore() === player.score}
              key={player.id.toString()}
            />
          )
        )
        }
      </Consumer>
      <AddPlayerForm/>
    </div>
  );
}

export default App;
