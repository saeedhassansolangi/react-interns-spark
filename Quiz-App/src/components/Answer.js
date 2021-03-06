import React from 'react';

function Answer(props) {
  return (
    <div>
      <button
        className="btnAnswer"
        type="button"
        onClick={() => props.handleClick(props.choice)}
      >
        {props.answer}
      </button>
    </div>
  );
}

export default Answer;
