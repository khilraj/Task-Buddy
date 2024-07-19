import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs";
import AdminDashboardUI from "./DashboardUI";


export default async function AdminDashboard() {
  const users = await clerkClient.users.getUserList();
  const user = await currentUser();

  return <AdminDashboardUI users={users} currentUser={user} />;
}


// return (
//   <div className="bg-gray-100 min-h-screen p-4">
//     <div className="flex justify-between items-center bg-blue-600 p-4 text-white">
//       <div className="flex items-center">
//         <span className="text-2xl font-bold mr-2">T<span className="text-black">ask</span> Buddy</span>
//       </div>
//       <div className="flex items-center">
//         <img src={imageUrl} alt="Profile" className="w-8 h-8 rounded-full" />
//         <span className="ml-2">{firstName} {lastName}</span>
//       </div>
//     </div>

//     <div className="flex justify-center items-center my-8">
//       <img src="" alt="Admin Dashboard" className="w-1/2" />
//     </div>

//     <div className="bg-blue-600 text-white p-4 rounded-t-lg">
//       <h2 className="text-xl font-bold">User Management</h2>
//     </div>

//     <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
//       <div className="p-4">
//         <div className="flex justify-between mb-4">
//           <input
//             type="text"
//             placeholder="Search User"
//             className="border rounded p-2 w-1/2"
//           />
//           <button className="bg-blue-600 text-white p-2 rounded">
//             <i className="fas fa-search"></i>
//           </button>
//         </div>

//         {users.map((user) => (
//           <div
//             key={user.id}
//             className="flex items-center justify-between p-4 border-b"
//           >
//             <div className="flex items-center">
//               <img
//                 src={user.imageUrl}
//                 alt=""
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div>
//                 <div className="text-black font-bold">
//                   {user.firstName} {user.lastName}
//                 </div>
//                 <div className="text-gray-600">
//                   {
//                     user.emailAddresses.find(
//                       (email) => email.id === user.primaryEmailAddressId
//                     )?.emailAddress
//                   }
//                 </div>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <button className="bg-green-500 text-white py-1 px-3 rounded">See Task</button>
//               <button className="bg-purple-500 text-white py-1 px-3 rounded">Edit</button>
//               <button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-center mt-4">
//           <button className="bg-gray-300 p-2 rounded mx-1">Prev</button>
//           <button className="bg-gray-300 p-2 rounded mx-1">1</button>
//           <button className="bg-gray-300 p-2 rounded mx-1">2</button>
//           <button className="bg-gray-300 p-2 rounded mx-1">3</button>
//           <button className="bg-gray-300 p-2 rounded mx-1">4</button>
//           <button className="bg-gray-300 p-2 rounded mx-1">Next</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );




// ........................................................................................................

// import React, { useState, useEffect } from 'react';
// import UserList from './UserList';
// import TaskList from './TaskList';
// import { clerkClient } from '@clerk/nextjs';
// import './AdminPage.css';
// import { User } from '@clerk/nextjs/server';

// // interface User {
// //   id: string;
// //   fullName: string;
// //   lastName: string;
// //   emailAddresses: { emailAddress: string }[];
// // }

// const AdminPage = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUserTasks, setSelectedUserTasks] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const users: User[] = await clerkClient.users.getUserList();
//         setUsers(users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleSeeTaskClick = async (userId: any) => {
//     try {
//       const response = await fetch(`/api/tasks?userId=${userId}`);
//       const tasks = await response.json();
//       setSelectedUserTasks(tasks);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   return (
//     <div className="admin-page">
//       <header className="header">
//         <div className="logo">Task Buddy</div>
//         <div className="user-info">Khilraj Shrestha</div>
//       </header>
//       <div className="image-placeholder">
//         {!selectedUserTasks && <p>in this gap, here's an image...</p>}
//       </div>
//       <div className="user-management-section">
//         <UserList users={users} onSeeTaskClick={handleSeeTaskClick} />
//         {selectedUserTasks && <TaskList tasks={selectedUserTasks} />}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;







// ..........................................................................


// import { clerkClient } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function AdminDashboard() {


//   const users = await clerkClient.users.getUserList();

//   return (
//     <>
//       <h1 className="text-black">This is the admin dashboard</h1>
//       <p className="text-black">This page is restricted to users with the 'admin' role.</p>

//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <img src={user.imageUrl} alt="" width="50" height="50" />
//             <div className="text-black">
//               {user.firstName} {user.lastName}
//             </div>
//             <div className="text-black">
//               {
//                 user.emailAddresses.find(
//                   (email) => email.id === user.primaryEmailAddressId
//                 )?.emailAddress
//               }
//             </div>
//             <div>{user.publicMetadata.role as string}</div>
//           </div>
//         );
//       })}
//     </>
//   );
// }