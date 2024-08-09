// // pages/api/csrf-token.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import csrf from 'csrf';
// import { withSession } from '../../lib/withSession';

// const csrfProtection = new csrf({
//   secret: process.env.CSRF_SECRET!, 
// });

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = req.session;

//   if (!session) {
//     res.status(500).json({ error: 'Session not available' });
//     return;
//   }

//   // Create a CSRF token and store it in the session
//   const token = csrfProtection.create();
//   session.csrfToken = token; 

//   await session.save(); 

//   // Respond with the CSRF token
//   res.status(200).json({ csrfToken: token });
// }

// export default withSession(handler);
