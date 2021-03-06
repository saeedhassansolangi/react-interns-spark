import React from 'react';
import AnswerList from './AnswerList';
import Question from './Question';
import UserGreeting from './UserGreeting';
import Pass from './Pass';
import Fail from './Fail';

function QuizArea(props) {
  // if it is true than it will return than won't run the Below TWO COMPONENTS
  // if (props.isFinished) {
  //   return <UserGreeting />;
  // }

  if (props.correct === 3) {
    return <Pass correct={props.correct} />;
  } else if (props.incorrect === 3) {
    return <Fail incorrect={props.incorrect} />;
  } else if (props.isFinished) {
    return <UserGreeting />;
  }

  return (
    <div>
      <Question dataSet={props.dataSet} current={props.current} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;
