"use client"
import React, { useState, useEffect } from "react";
import { User } from "@clerk/nextjs/server";
import "../../styles/admin.css";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import EditUserModal from "./EditUserModal"; 

interface AdminDashboardUIProps {
  users: User[];
  currentUser: User | null;
}

interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
}



export default function AdminDashboardUI({ users: initialUsers, currentUser }: AdminDashboardUIProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);


  const { firstName, lastName, imageUrl } = currentUser || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };



  const handleSeeTaskClick = async (user: User) => {
    setSelectedUser(user);
    setLoading(true);
    try {
      const fetchedTasks = await fetchTasksForUser(user.id);
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasksForUser = async (userId: string): Promise<Task[]> => {
    const response = await fetch(`/api/tasks/admin?userId=${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    return data;
  };

  const handleEditUserClick = (user: User) => {
    setEditingUser(user);
  };

  const handleSaveUser = async (updatedUser: User) => {
    try {
      const response = await fetch(`/api/clerk/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      const data = await response.json();
      // Update the users list with the updated user
      setUsers(users.map((user) => (user.id === updatedUser.id ? data : user)));
    } catch (error) {
      console.error('Error updating user: ', error);
    } finally {
      setEditingUser(null);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="logo">T<span>ask</span> Buddy</div>
        <div className="profile">
          <div className="profile-overlay"></div>
          <div className="profile-img-container">
            <Image width={35} height={35} src={imageUrl} alt="Profile" className="profile-img" />
            <UserButton />
          </div>
          <span className="profile-name">{firstName} {lastName}</span>
        </div>
      </header>

      {/* <div className="dashboard-image-container">
        <img src="/path-to-your-image.png" alt="Admin Dashboard" className="dashboard-image" />
      </div> */}




      <section className="user-management">
        <div className="user-management-header">
          <h2>User Management</h2>
        </div>

        <div className="user-management-body">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search User"
              className="search-input"
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="user-list">
            {users.map((user) => (
              <div key={user.id} className="user-row">
                <div className="user-info">
                  <img src={user.imageUrl} alt="" className="user-avatar" />
                  <div className="user-details">
                    <span className="user-name">{user.firstName} {user.lastName}</span>
                    <span className="user-email">
                      {user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress}
                    </span>
                  </div>
                </div>
                <div className="user-task">
                  <button className="see-task-button" onClick={() => handleSeeTaskClick(user)}>See Task</button>
                </div>
                <div className="user-actions">
                  <button className="edit-button" onClick={() => handleEditUserClick(user)}>Edit</button>
                  <button className="delete-button">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedUser && (
        <div className="task-modal">
          <div className="task-modal-content text-black">
            <h2>All Tasks of {selectedUser.firstName} {selectedUser.lastName}</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="task-table text-black">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.date}</td>
                      <td>
                        <span className={`status ${task.isCompleted ? 'completed' : 'incomplete'}`}>
                          {task.isCompleted ? 'Completed' : 'Incomplete'}
                        </span>
                        {task.isImportant && <span className="important">important</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <button onClick={() => setSelectedUser(null)} className="close-button">Close</button>
          </div>
        </div>
      )}

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}


