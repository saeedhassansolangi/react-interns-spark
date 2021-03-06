import React from 'react';

function Fail(props) {
  return (
    <div className="resultMessage">
      <h1>Test Completed</h1>
      <h2 className="fail">Try Again, You Failed</h2>
      <h3>Your Incorrect Answered {props.incorrect}</h3>
    </div>
  );
}

export default Fail;
