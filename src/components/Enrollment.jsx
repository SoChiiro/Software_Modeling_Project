import React, { useState, useEffect } from 'react';

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
      <h2>Enrollment</h2>
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.title}
          </option>
        ))}
      </select>
      <button onClick={handleEnroll} disabled={!selectedCourse}>
        Enroll
      </button>
      {enrollmentStatus && <p>{enrollmentStatus}</p>}
    </div>
  );
};

export default Enrollment;
