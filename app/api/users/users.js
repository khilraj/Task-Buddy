import { clerkClient } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const users = await clerkClient.users.getUserList();
    res.status(200).json(users);
  } else {
    res.status(405).end(); 
  }
}


// import { NextApiRequest, NextApiResponse } from 'next';
// import { clerkClient } from '@clerk/nextjs/server';

// const ADMIN_ID = 'user_2j6nv8dDev1QBUIj2pmpzZoi9mG'; // Replace with the actual admin ID

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const users = await clerkClient.users.getUserList();
//     const filteredUsers = users.filter((u) => u.id !== ADMIN_ID);
//     res.status(200).json(filteredUsers);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// }
