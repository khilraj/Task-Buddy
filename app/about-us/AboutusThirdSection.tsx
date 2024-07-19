import React from 'react';
import '../../styles/AboutusThirdSection.css'

function AboutusThirdSection() {
  return (
    <div className="voiceContainer">
      <div className="textSection">
        <h1>Our Vision and Commitment</h1>
        <div className="paragraphContainer">
          <p className="leftColumn">
          Our vision is to create a world where everyone, from individuals to teams, 
          can achieve their fullest potential by staying organized and focused. We aim 
          to be the go-to platform for task management, helping people streamline their 
          workflows and improve productivity.
          </p>
          <p className="rightColumn">
          We are committed to continuously improving TaskBuddy based on your feedback.
          Our team is dedicated to providing exceptional support and regularly rolling 
          out new features and updates to enhance your experience.
          </p>
        </div>
      </div>
      <img src="" alt="Protest" className="protestImage" />
    </div>
  );
}

export default AboutusThirdSection;
