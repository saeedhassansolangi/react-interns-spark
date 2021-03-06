import React from 'react';
import TotalCorrect from './TotalCorrect';
import TotalInCorrect from './TotalInCorrect';

function ScoreArea(props) {
  return (
    <div className="scoreWrapper">
      <h2>ScoreArea</h2>
      <TotalCorrect correct={props.correct} />
      <TotalInCorrect incorrect={props.incorrect} />
    </div>
  );
}

export default ScoreArea;
