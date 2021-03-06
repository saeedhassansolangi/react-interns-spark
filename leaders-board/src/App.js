import React from 'react';
import './styles.css';
import Student from './components/Student';

export default function App() {
  return (
    <div className="App">
      <h1 className="leadersboardHeading">Leadersboard</h1>
      <Student name="Saeed Hassan" university="MUET Jamshoro" score={335} />
      <Student name="Masood Ahmed" university="MUET Jamshoro" score={348} />
      <Student name="Pawan Kumar" university="MUET Jamshoro" score={344} />
      <Student name="Mohsin Ali" university="MUET Jamshoro" score={354} />
      <Student name="Sagheer Ahmed" university="MUET Jamshoro" score={341} />
      <Student name="Muhammad Umar" university="MUET Jamshoro" score={366} />
    </div>
  );
}
