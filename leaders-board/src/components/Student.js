import React from 'react';
import './student.css';

class Student extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      success: false,
      fail: false,
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score,
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1,
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
        if (this.state.score >= 341) {
          this.setState({ fail: false });
        }
      }
    );
  }

  subtractScore() {
    this.setState(
      {
        score: this.state.score - 1,
      },
      () => {
        if (this.state.score <= 340) {
          this.setState({ fail: true });
        }
        if (this.state.score <= 349) {
          this.setState({ success: false });
        }
      }
    );
  }

  render() {
    // Success Text
    const isSuccess = this.state.success;
    let successText;
    if (isSuccess) {
      successText = <span className="success">Success</span>;
    } else {
      successText = '';
    }

    // Failure Text
    let isfailure = this.state.fail;
    let failureText;
    if (isfailure) {
      failureText = <span className="fail">Fail</span>;
    } else {
      failureText = '';
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}
            <button
              onClick={() => this.addScore()}
              className="addScoreButton"
              style={{
                width: this.state.success ? '30px' : '25px',
                height: this.state.success ? '30px' : '25px',
              }}
            >
              +
            </button>
            <button
              onClick={() => this.subtractScore()}
              className="subtractScoreButton"
              style={{
                width: this.state.fail ? '30px' : '25px',
                height: this.state.fail ? '30px' : '25px',
              }}
            >
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {successText} {failureText}
          </p>
        </div>

        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
