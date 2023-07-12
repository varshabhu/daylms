import React from 'react';
import './Course.css';

const Course = ({ course }) => {
  return (
    <div className="course">
      <h2 className="course-title">Selected Course</h2>
      <h3>{course.name}</h3>
      <p>Number of Students: {course.students}</p>
    </div>
  );
};

export default Course;
