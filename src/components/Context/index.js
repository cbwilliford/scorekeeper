import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

// export class Provider extends Component {
//   state = {
//     players: []
//   };

//   handleRemovePlayer = (id) => {
//     this.setState( prevState => {
//       return {
//         players: prevState.players.filter(p => p.id !== id)
//       };
//     });
//   }

//   handleScoreChange = (index, delta) => {
//   this.setState( prevState => ({
//     score: prevState.players[index].score += delta
//   }));
//   }

//   handleAddPlayer = (name) => {
//     this.setState( prevState => {
//       return {
//         players: [
//           ...prevState.players,
//           {
//             name,
//             score: 0,
//             id: prevState.players.length += 1
//           }
//         ]
//       }
//     })
//   }

//   handleResetScores = () => {
//     this.setState( prevState => {
//       return prevState.players.map (player => player.score = 0)
//     }
//     );
//   }

//   getHighestScore = () => {
//     const scoreArray = this.state.players.map( player => player.score)
//     const highScore = Math.max(...scoreArray)
//     if (highScore) {
//       return highScore
//     } else {
//       return null
//     }
//   }
//   render() {
//     return(
//       <ScoreboardContext.Provider value={{
//         players: this.state.players,
//         actions: {
//           handleRemovePlayer: this.handleRemovePlayer,
//           handleScoreChange: this.handleScoreChange,
//           handleAddPlayer: this.handleAddPlayer,
//           handleResetScores: this.handleResetScores,
//           getHighestScore: this.getHighestScore
//         }
//       }
//       }>
//       {this.props.children}
//       </ScoreboardContext.Provider>
//     );
//   }

// }



export class Provider extends Component {
  state = {
    players: [],
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
  this.setState( prevState => ({
    score: prevState.players[index].score += delta
  }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: prevState.players.length += 1
          }
        ]
      }
    })
  }

  handleResetScores = () => {
    this.setState( prevState => {
      return prevState.players.map (player => player.score = 0)
    }
    );
  }

  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning
    })
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now()});
    }
  }

  handleTick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }))
    }
  }

  handleResetTimer = () => {
    this.setState({
      elapsedTime: 0
    })
  }

  getHighestScore = () => {
    const scoreArray = this.state.players.map( player => player.score)
    const highScore = Math.max(...scoreArray)
    if (highScore) {
      return highScore
    } else {
      return null
    }
  }
  render() {
    return(
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        isRunning: this.state.isRunning,
        elapsedTime: this.state.elapsedTime,
        previousTime: this.state.previousTime,
        actions: {
          handleRemovePlayer: this.handleRemovePlayer,
          handleScoreChange: this.handleScoreChange,
          handleAddPlayer: this.handleAddPlayer,
          handleResetScores: this.handleResetScores,
          getHighestScore: this.getHighestScore,
          handleStopwatch: this.handleStopwatch,
          handleTick: this.handleTick,
          handleResetTimer: this.handleResetTimer
        }
      }
      }>
      {this.props.children}
      </ScoreboardContext.Provider>
    );
  }

}


export const Consumer = ScoreboardContext.Consumer;
export const Context = ScoreboardContext;
