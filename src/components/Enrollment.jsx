import React, { useState, useEffect, Fragment  } from 'react';
import App from '../App.css';
 
const Enrollment = () => {

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('');

  useEffect(() => {
    // Trouve les courses disponibles
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleEnroll = async () => {
    try {
      // Hook qui inscrit le le user
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        body: JSON.stringify({ courseId: selectedCourse }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setEnrollmentStatus('Enrollment successful!');
      } else {
        setEnrollmentStatus('Enrollment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error enrolling in the course:', error);
      setEnrollmentStatus('Enrollment failed. Please try again.');
    }
  };
return (
  <div>
    <div className="title">
      <p className='text-black'>Select a course</p>
      </div>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose a course</option>
      <option value="US">{courses}</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
</div>
);
   
};

export default Enrollment;
