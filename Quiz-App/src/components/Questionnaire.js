import React from 'react';
import dataSet from '../api/dataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

class Questionnaire extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSet: dataSet,
      current: 0,
      correct: 0,
      incorrect: 0,
      isFinished: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(choice) {
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current === this.state.dataSet.length - 1) {
      this.setState({ isFinished: true });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    const { dataSet, isFinished, current, correct, incorrect } = this.state;
    return (
      <div>
        <QuizArea
          handleClick={this.handleClick}
          dataSet={dataSet[current]}
          isFinished={isFinished}
          correct={correct}
          incorrect={incorrect}
          current={current}
        />
        <ScoreArea correct={correct} incorrect={incorrect} />
      </div>
    );
  }
}

export default Questionnaire;
