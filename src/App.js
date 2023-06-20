import React from 'react';
import Course from './components/Course';
import Enrollment from './components/Enrollment';
import Scheduling from './components/Scheduling';
import TrainingPlan from './components/TrainingPlan';
import Evaluation from './components/Evaluation';

const App = () => {
  return (
    <div>
      <Course/>
      <Enrollment />
      <Scheduling />
      <TrainingPlan />
      <Evaluation />
    </div>
  );
};

export default App;