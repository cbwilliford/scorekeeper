import React, {useEffect, useContext} from 'react';
import {Context} from './Context';

// class Stopwatch extends Component {
//   state = {
//     isRunning: false,
//     elapsedTime: 0,
//     previousTime: 0
//   }

//   handleStopwatch = () => {
//     this.setState({
//       isRunning: !this.state.isRunning
//     })
//     if (!this.state.isRunning) {
//       this.setState({ previousTime: Date.now()});
//     }
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 100)
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   tick = () => {
//     if (this.state.isRunning) {
//       const now = Date.now();
//       this.setState( prevState => ({
//         previousTime: now,
//         elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
//       }))
//     }
//   }

//   reset = () => {
//     this.setState({
//       elapsedTime: 0
//     })
//   }

//   render() {
//     const seconds = Math.floor(this.state.elapsedTime / 1000 )

//     return(
//       <div className="stopwatch">
//         <h2>Stopwatch</h2>
//         <span className="stopwatch-time">{seconds}</span>
//         <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     );
//   }
// }




const Stopwatch = () => {
  console.log(useContext(Context))
  const context = useContext(Context);
  console.log(context)
  useEffect(() => {
    {/*  action on componentDidMount */}
    let intervalID = setInterval(() => context.actions.handleTick(), 100)

    {/*  return callback for how component will unmount*/}
      return () => clearInterval(intervalID);
  });

  return(
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{Math.floor(context.elapsedTime / 1000 )}</span>
      <button onClick={context.actions.handleStopwatch}>{context.isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={context.actions.handleResetTimer}>Reset</button>
    </div>
  );
  }






export default Stopwatch;
