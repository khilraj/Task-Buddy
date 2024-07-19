import React from 'react';
import '../../styles/OurStorySection.css'


function OurStorySection() {
  return (
    <div className="storyContainer">
      <div className="textContent text-black">
        <h1 className='OurStoryheading'>Our story</h1>
        <h3>Welcome to TaskBuddy, where organization meets simplicity.</h3>
        <p className='OurStorytext1 text-black'>
        Our journey began with a simple realization: in the hustle and bustle of our daily lives, 
        staying organized and keeping track of tasks can be a daunting challenge. As a group of professionals 
        and students, we struggled with scattered notes, forgotten deadlines, and fragmented workflows. 
        We knew there had to be a better way to manage our tasks, and thus, TaskBuddy was born.
        </p>
        <p className='OurStorytext2 text-black'>
        TaskBuddy started as a passion project among friends who shared a common goal: to create a tool that would 
        simplify task management and boost productivity. We envisioned a platform that is intuitive, user-friendly, 
        and versatile enough to cater to individuals, teams, and organizations. After countless brainstorming sessions, 
        late-night coding marathons, and user feedback loops, we crafted TaskBuddy to be the ultimate productivity hub.
        </p>
        <p className='OurStorytext3 text-black'>
        Our mission is to empower you to take control of your tasks and streamline your workflow. Whether you're a student 
        juggling assignments, a professional managing projects, or a team collaborating on a shared goal, TaskBuddy is designed 
        to help you stay organized and focused. We believe that by centralizing your tasks in one place, you can achieve more and stress less.
        </p>
      </div>
      <div className="imagesContainer">
        <img src="assets/story1.jpeg" alt="Office Environment" />
        <img className='OurImage2' src="assets/story2.jpeg" alt="Team Meeting" />
        <img className='OurImage3' src="assets/story3.png" alt="Discussion" />
        <img className='OurImage4' src="assets/story4.jpg" alt="Casual Work" />
      </div>
    </div>
  );
}

export default OurStorySection;
