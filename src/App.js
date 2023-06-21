import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from './components/Course';
import Enrollment from './components/Enrollment';
import Scheduling from './components/Scheduling';
import TrainingPlan from './components/TrainingPlan';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/trainingplan" element={<TrainingPlan />} />
          <Route path="/evaluation" element={<Evaluation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
