import React, { useState } from 'react';
import { User } from '@clerk/nextjs/server';

interface EditUserModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, onClose, onSave }) => {
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [email, setEmail] = useState(user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress || '');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = { 
      ...user, 
      firstName, 
      lastName, 
    };
    onSave(updatedUser);
  };

  return (
    <div className="modal">
      <div className="modal-content text-black">
        <div className="modal-header">
          <h2>Edit User</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <form onSubmit={handleSave}>
          <label className='label'>
            FirstName
            <input 
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              placeholder="User's first name" 
            />
          </label>
          <label className='label'>
            LastName
            <input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              placeholder="User's last name" 
            />
          </label>
          <div className="modal-actions">
            <button type="submit" className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
