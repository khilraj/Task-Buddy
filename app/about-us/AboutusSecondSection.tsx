import React from 'react';
import '../../styles/AboutusSecondSection.css'


function AboutusSecondSection() {
  const groups = [
    {
      title: "Individuals",
      description: "For managing daily tasks, personal projects, and goals.",
      image: "assets/individuals.jpeg"
    },
    {
      title: "Educational Institutions",
      description: "For managing class assignments, grading, and scheduling.",
      image: "assets/educational_institute.jpeg"
    },
    {
      title: "Non-Profit Organizations",
      description: "For managing volunteer activities, events, and campaigns.",
      image: "assets/organisation.jpeg"
    },
    {
      title: "Administrators",
      description: "For managing user accounts, monitoring activity, and ensuring smooth operation of the website.",
      image: "assets/administrator.jpeg"
    },
    {
      title: "Freelancer",
      description: "For organizing client projects, deadlines, and invoices.",
      image: "assets/administrator.jpeg"
    },

  ];

  return (
    <div className="userGroupsContainer">
      <div className="textContent">
        <div className="headerText">
          <h3 className='whouse'>Our Journey</h3>
          <p className='paragraph'>
            TaskBuddy was born out of a shared frustration with the chaos of unorganized tasks and
            missed deadlines. Our founders, a group of friends from various professional backgrounds,
            decided to build a solution that could address these challenges head-on. After months of dedication
            and collaboration, TaskBuddy was launched, and we haven't looked back since.
          </p>
        </div>
      </div>
      <div className="cardsContainer">
        {groups.map(group => (
          <div className="userCard" key={group.title}>
            <img src={group.image} alt={group.title} className="groupImage" />
            <h3 className="cardTitle">{group.title}</h3>
            <p className="cardDescription">{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutusSecondSection;
