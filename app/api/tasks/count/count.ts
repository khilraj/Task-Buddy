import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/utils/connect'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const taskCount = await prisma.task.count();
    res.status(200).json({ count: taskCount });
  } catch (error) {
    console.error("Error fetching task count:", error);
    res.status(500).json({ error: 'Error fetching task count' });
  }
}
