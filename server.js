// const express = require('express');
// const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
// const moment = require('moment');

// const app = express();

// const usersFailedAttempts = {};

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Get user from Clerk
//   const user = await clerkClient.users.getUserByEmail(email);
//   if (!user) {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   const userId = user.id;

//   // Check if the user is blocked
//   const failedData = usersFailedAttempts[userId];
//   if (failedData) {
//     const { attempts, lastFailedAt } = failedData;

//     // Check if the user has reached the max attempts
//     if (attempts >= 5) {
//       const now = moment();
//       const blockDuration = moment(lastFailedAt).add(30, 'minutes');
//       if (now.isBefore(blockDuration)) {
//         return res.status(429).json({ message: 'Account locked. Please try again later.' });
//       } else {
//         usersFailedAttempts[userId] = { attempts: 0, lastFailedAt: null };
//       }
//     }
//   }

//   // Attempt login
//   const isValidPassword = await clerkClient.users.verifyPassword(userId, password);
//   if (!isValidPassword) {
//     if (!usersFailedAttempts[userId]) {
//       usersFailedAttempts[userId] = { attempts: 1, lastFailedAt: new Date() };
//     } else {
//       usersFailedAttempts[userId].attempts += 1;
//       usersFailedAttempts[userId].lastFailedAt = new Date();
//     }
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   // If login is successful, reset the failed attempts counter
//   usersFailedAttempts[userId] = { attempts: 0, lastFailedAt: null };

//   // Proceed with login (e.g., generate tokens, etc.)
//   res.json({ message: 'Login successful' });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
