import React from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      <input type="text" placeholder="Search Task" className="search-bar" />
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <span>{task.title}</span>
          <span>{task.description}</span>
          <span>{task.date}</span>
          <span>{task.isCompleted ? 'Completed' : 'Incomplete'}</span>
          <span>{task.isImportant ? 'Important' : ''}</span>
        </div>
      ))}
      <div className="pagination">
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default TaskList;
