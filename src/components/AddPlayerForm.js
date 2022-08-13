import React from 'react';
import {Consumer} from './Context';


const AddPlayerForm = () => {
  const playerInput = React.createRef();
  return(
      <Consumer>
        { ({actions}) => {
          const handleSubmission = (e) => {
          e.preventDefault();
          actions.handleAddPlayer(playerInput.current.value);
          e.currentTarget.reset();
          }
          return (
            <form onSubmit={handleSubmission}>
              <input
                type="text"
                ref={playerInput}
                placeholder="Who's playing?"
              />
              <input
                type="submit"
                value="Add Player"
              />
            </form>
          )
        }}
      </Consumer>
    )
  }

export default AddPlayerForm;
