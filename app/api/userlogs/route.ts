import { NextApiRequest, NextApiResponse } from 'next';
import UserLog from '@/lib/models/userLog.model';
import { connect } from '@/lib/db'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect();

    // Check if the method is GET
    if (req.method === 'GET') {
      const logs = await UserLog.find().sort({ timestamp: -1 }).exec();
      return res.status(200).json(logs);
    } else {
      res.setHeader('Allow', ['GET']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('Error fetching user logs:', error);
    return res.status(500).json({ message: 'Error fetching user logs' });
  }
}
