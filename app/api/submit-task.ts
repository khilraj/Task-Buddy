// // pages/api/submit-task.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import csrf from 'csrf';
// import { withSession } from '../../lib/withSession';

// const csrfProtection = new csrf();

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const session = req.session;

//   if (!session || !req.body.csrfToken) {
//     res.status(403).json({ error: 'CSRF token missing or invalid' });
//     return;
//   }

//   // Verify the CSRF token
//   const isValid = csrfProtection.verify(session.csrfToken, req.body.csrfToken);

//   if (!isValid) {
//     res.status(403).json({ error: 'Invalid CSRF token' });
//     return;
//   }

//   // Proceed with handling the request
//   res.status(200).json({ message: 'Request successful' });
// }

// export default withSession(handler);
