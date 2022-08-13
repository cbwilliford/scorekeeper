import React from 'react';

const ResetScore = ({resetScores}) => {
  return (
    <button className="resetScores" onClick={resetScores}>Reset Scores</button>
  )
}

export default ResetScore;