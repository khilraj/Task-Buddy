import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR DELETING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}


export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const data = await req.json();
    const { title, description, date, completed, important } = data;

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log("ERROR EDITING TASK: ", error);
    return NextResponse.json({ error: "Error editing task", status: 500 });
  }
}
