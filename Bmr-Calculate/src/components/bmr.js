import React from 'react';
import './bmr.css';

class BmrCalc extends React.Component {
  constructor() {
    super();
    this.state = {
      gender: '',
      weight: '',
      age: '',
      heightFeet: '',
      heightInches: '',
      activity: '',
      bmr: '',
      error: '',
      calories: '',
      form: '',
      calculator: '',
      weightIb: '',
      heightCm: '',
      heightM: '',
      Message: '',
    };

    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchesChange = this.handleHeightInchesChange.bind(this);
    this.handleActivityChange = this.handleActivityChange.bind(this);
    this.calculateBmr = this.calculateBmr.bind(this);
    this.calculateCalories = this.calculateCalories.bind(this);
    this.handleCalculatorChange = this.handleCalculatorChange.bind(this);
    this.handleWeightIbChange = this.handleWeightIbChange.bind(this);
    this.handleHeightCmChange = this.handleHeightCmChange.bind(this);
    this.handleHeightMChange = this.handleHeightMChange.bind(this);
  }

  // this function will be invoked when "age" is changed or when we insert the value in age input
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }

  handleAgeChange(event) {
    // debugger;
    // console.log(event);
    this.setState({ age: event.target.value });
  }

  handleWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  handleHeightFeetChange(event) {
    this.setState({ heightFeet: event.target.value });
  }

  handleHeightInchesChange(event) {
    this.setState({ heightInches: event.target.value });
  }

  handleWeightIbChange(event) {
    this.setState({ weightIb: event.target.value });
  }

  handleHeightMChange(event) {
    this.setState({ heightM: event.target.value });
  }

  handleHeightCmChange(event) {
    this.setState({ heightCm: event.target.value });
  }

  handleActivityChange(event) {
    this.setState({ activity: event.target.value });
  }

  calculateBmr() {
    const {
      gender,
      age,
      weight,
      heightFeet,
      heightInches,
      form,
      heightCm,
      heightM,
      weightIb,
    } = this.state;
    if (form === 'imperial' || form === '') {
      if (
        age === '' ||
        gender === '' ||
        weight === '' ||
        heightFeet === '' ||
        heightInches === ''
      ) {
        this.setState({ error: 'All fields are required' });
        return;
      }

      let bmrCalc = '';

      let height = heightFeet * 12 + Number(heightInches);
      if (gender === '2') {
        bmrCalc = 66.47 + 6.24 * weight + 12.7 * height - 6.755 * age;
      } else if (gender === '1') {
        bmrCalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      }
      this.setState({ bmr: bmrCalc, calories: '', activity: '' });

      this.setState({ error: '' });
    }

    if (form === 'metric') {
      if (
        age === '' ||
        gender === '' ||
        weightIb === '' ||
        heightCm === '' ||
        heightM === ''
      ) {
        this.setState({ error: 'All fields are required' });
        return;
      } else {
        let bmrCalc = '';
        let height = heightM * 100 + Number(heightCm);
        if (gender === '2') {
          bmrCalc = 66.47 + 13.75 * weightIb + 5.003 * height - 6.7 * age;
        } else if (gender === '1') {
          bmrCalc = 665.1 + 9.563 * weightIb + 1.85 * height - 4.676 * age;
        }

        this.setState({ bmr: bmrCalc, calories: '', activity: '' });

        this.setState({ error: '' });
      }
    }
  }

  calculateCalories() {
    this.setState({ calories: '' });
    const { activity, bmr } = this.state;

    if (!activity) {
      this.setState({ Message: 'Please Select the activity First' });
      return;
    }

    this.setState({ calories: bmr * activity, Message: '' });
  }

  handleCalculatorChange(event) {
    this.setState({ form: event.target.value, calculator: event.target.value });
  }

  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = <div className="error">{this.state.error}</div>;
    }

    let resultBmr;
    if (this.state.bmr) {
      resultBmr = <div className="result">{this.state.bmr}</div>;
    }

    let resultCalories;
    if (this.state.calories) {
      resultCalories = <div className="result">{this.state.calories}</div>;
    }

    let displayActivityError;
    if (this.state.Message) {
      displayActivityError = (
        <div className="errorMessage">{this.state.Message}</div>
      );
    }

    let displayActivityForm;
    if (this.state.bmr) {
      displayActivityForm = (
        <div className="workout">
          <div className="inputwrap">
            <label className="label">Workout in a Week</label>
            <select
              className="activity"
              value={this.state.activity}
              onChange={this.handleActivityChange}
              name="activity"
            >
              <option value="">Select your Activity</option>
              <option value="1.2">
                Sedentary (Very little or no exercise, and desk job)
              </option>
              <option value="1.375">
                Lightly Active (Light exercise 1 to 3 days per week)
              </option>
              <option value="1.55">
                Moderately Active (Moderate exercise 3 to 5 days per week)
              </option>
              <option value="1.725">
                Very Active (Heavy exercise 6 to 7 days per week)
              </option>
              <option value="1.9">
                Extremely Active (Very intense exercise, and physical job,
                exercise multiple times per day)
              </option>
            </select>
          </div>
          <button type="button" onClick={this.calculateCalories}>
            Calculate Calories
          </button>
          {resultCalories}
          {displayActivityError}
        </div>
      );
    }

    let displayForm;
    if (this.state.form === 'imperial' || this.state.form === '') {
      displayForm = (
        <div>
          <div className="inputwrap">
            <label className="label">Weight in Pounds</label>
            <input
              type="number"
              name="weight"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              className="weight"
              min="0"
              max="999"
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height in feet and inches</label>
            <input
              type="number"
              name="heightFeet"
              value={this.state.heightFeet}
              onChange={this.handleHeightFeetChange}
              className="heightFeet"
              min="0"
              max="8"
            />
            <input
              type="number"
              name="heightInches"
              value={this.state.heightInches}
              onChange={this.handleHeightInchesChange}
              className="heightInches"
              min="0"
              max="11"
            />
          </div>
        </div>
      );
    } else if (this.state.form === 'metric') {
      displayForm = (
        <div>
          <div className="inputwrap">
            <label className="label">Weight in kg</label>
            <input
              type="number"
              name="weightIb"
              value={this.state.weightIb}
              onChange={this.handleWeightIbChange}
              className="weight"
              min="0"
              max="999"
            />
          </div>
          <div className="inputwrap">
            <label className="label">Height in meter and cm</label>
            <input
              type="number"
              name="heightFeet"
              value={this.state.heightM}
              onChange={this.handleHeightMChange}
              className="heightFeet"
              min="0"
              max="15"
            />
            <input
              type="number"
              name="heightInches"
              value={this.state.heightCm}
              onChange={this.handleHeightCmChange}
              className="heightInches"
              min="0"
            />
          </div>
        </div>
      );
    }
    return (
      <div id="bmrcalc">
        <div className="form">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          <select
            className="calculator"
            value={this.state.calculator}
            onChange={this.handleCalculatorChange}
            name="calculator"
          >
            <option value="">Select BMR Calculator (Default imperial)</option>
            <option value="imperial">Imperial BMR Calculator</option>
            <option value="metric">Metric BMR Calculator</option>
          </select>
          {errorMessage}
          <div className="inputwrap">
            <label className="label">Gender</label>
            <label>
              <input
                type="radio"
                className="genderF"
                checked={this.state.gender === '1'}
                onChange={this.handleGenderChange}
                name="gender"
                value="1"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                className="genderM"
                checked={this.state.gender === '2'}
                onChange={this.handleGenderChange}
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          {displayForm}
          <div className="inputwrap">
            <label className="label">Age in years</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age"
              name="age"
              min="0"
              max="120"
            />
          </div>
          <button type="button" onClick={this.calculateBmr}>
            Calculate BMR
          </button>
          {resultBmr}
          {displayActivityForm}
        </div>
      </div>
    );
  }
}
export default BmrCalc;
