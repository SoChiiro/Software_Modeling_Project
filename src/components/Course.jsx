import React, { useState } from 'react';
import App from '../App.css';

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

      <h1 className="text-3xl font-bold underline">Hey</h1>

  <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create a new Course !</div>
        <div class="input-container ic1">
          
          <input id="theme" 
                class="input" 
                type="text" 
                placeholder=" " 
          />

          <div class="cut"></div>

          <label for="theme" 
                class="placeholder" 
                value={courseDetails.theme}
                onChange={handleInputChange}>
          Theme</label>

        </div>

        <div class="input-container ic2">

          <input id="topic" 
                class="input" 
                type="text" 
                placeholder=" " 
          />

          <div class="cut"></div>

          <label for="topic" 
                class="placeholder"
                value={courseDetails.topic}
              onChange={handleInputChange}
          >Topic</label>

        </div>

        <div class="input-container ic2">

        <input id="subtopic" 
                class="input" 
                type="text" 
                placeholder=" " 
          />

          <div class="cut cut-short"></div>

          <label for="subtopic" 
                class="placeholder"
                value={courseDetails.subtopics}
                onChange={handleInputChange}
          >SubTopic</label>

          <div class="input-container ic3">

          <input id="description" 
                  class="input" 
                  type="text" 
                  placeholder=" " 
            />

            <div class="cut cut-short"></div>

            <label for="description" 
                  class="placeholder"
                  type="textarea"
                  value={courseDetails.description}
                  onChange={handleInputChange}
            >Description</label>

        </div>
        <button type="text" class="submit">Create Course</button>
        </div>

      </div>
      </div>
  );
};

export default CourseCreation;
