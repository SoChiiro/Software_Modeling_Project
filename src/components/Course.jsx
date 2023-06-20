import React, { useState } from 'react';

const CourseCreation = () => {
  const [courseDetails, setCourseDetails] = useState({
    theme: '',
    topic: '',
    subtopics: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Theme:
          <input
            type="text"
            name="theme"
            value={courseDetails.theme}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Topic:
          <input
            type="text"
            name="topic"
            value={courseDetails.topic}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Subtopics:
          <input
            type="text"
            name="subtopics"
            value={courseDetails.subtopics}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            name="description"
            value={courseDetails.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CourseCreation;
