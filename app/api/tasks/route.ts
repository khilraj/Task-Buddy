import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


const SALT_ROUNDS=10;

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(tasks);
    // return tasks;
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }
    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

     // Hash the title and description before saving
     const hashedTitle = await bcrypt.hash(title, SALT_ROUNDS);
     const hashedDescription = await bcrypt.hash(description, SALT_ROUNDS);

    const task = await prisma.task.create({
      data: {
        title: hashedTitle,
        description: hashedDescription,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth();
    const { isCompleted, id } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
