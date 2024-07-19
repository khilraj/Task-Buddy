import React from 'react';
import '../../styles/AboutusFirstSection.css'

function AboutusFirstSection() {
  return (
    <div className="platformContainer">
      <h1 className="platformTitle">Who use platform?</h1>
      <p className="platformDescription">
        TaskBuddy is designed for individuals seeking to streamline their personal productivity.
        Whether you're a student managing your coursework, a professional juggling multiple projects, or simply someone
        who wants to keep their daily tasks in order, TaskBuddy is here to help. Our platform provides an intuitive and
        efficient way to organize, prioritize, and track your tasks, ensuring you stay on top of your commitments and
        achieve your goals with ease. Join the TaskBuddy community and experience the difference a well-managed task list
        can make in your daily life.

      </p>
      <img src="assets/home_imagebg.png" alt="Team Working" className="teamImage" />
    </div>
  );
}

export default AboutusFirstSection;
