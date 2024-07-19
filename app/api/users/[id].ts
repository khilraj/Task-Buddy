import { NextApiRequest, NextApiResponse } from 'next';
import { Clerk } from '@clerk/clerk-sdk-node';

const clerk = Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { firstName, lastName } = req.body;

    try {
      const user = await clerk.users.updateUser(id as string, {
        firstName,
        lastName,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
