import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    const url = new URL(req.url);
    const queryUserId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    if (!queryUserId) {
      return NextResponse.json({ error: "Missing userId in query", status: 400 });
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId: queryUserId,
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}