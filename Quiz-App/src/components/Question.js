import React from 'react';

function Question(props) {
  return (
    <h1 className="question">
      Q #<span className="questions">{props.current + 1} </span> :{' '}
      {props.dataSet.question}
    </h1>
  );
}

export default Question;
