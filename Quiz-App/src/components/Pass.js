import React from 'react';

function Pass(props) {
  return (
    <div className="resultMessage">
      <h1>Test Completed</h1>
      <h2 className="pass">Congratulations, You Passed</h2>
      <h3>Your Correct Answered {props.correct}</h3>
    </div>
  );
}

export default Pass;
