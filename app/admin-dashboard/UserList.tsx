import React from 'react';

// Define the User type if not defined elsewhere
interface User {
  id: string;
  fullName: string;
  lastName: string;
  emailAddresses: { emailAddress: string }[];
}

interface UserListProps {
  users: User[];
  onSeeTaskClick: (userId: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSeeTaskClick }) => {
  return (
    <div className="user-list">
      <input type="text" placeholder="Search User" className="search-bar" />
      {users.map(user => (
        <div key={user.id} className="user-item">
          <div className="user-info">
            <span>{user.fullName}</span>
            <span>{user.lastName}</span>
            <span>{user.emailAddresses[0].emailAddress}</span>
          </div>
          <button onClick={() => onSeeTaskClick(user.id)}>See Task</button>
          <button>Edit</button>
          <button>Delete</button>
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

export default UserList;
