import prisma from "@/app/utils/connect";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { addUserLog } from "@/lib/actions/userLog.action";
import logger from "@/lib/logger";

// const ALGORITHM = "aes-256-cbc";
// const SECRET_KEY = '1159449f1f21ee7b79b4afd0187918f178dd4f3b5a4d90604dc01a3579f6b25a'; 
// const IV = crypto.randomBytes(16); // Initialization vector

// if (!SECRET_KEY || SECRET_KEY.length !== 32) {
//   throw new Error("SECRET_KEY must be 32 bytes long");
// }


// // Function to encrypt text
// function encrypt(text: string) {
//   const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), IV);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return IV.toString("hex") + ":" + encrypted.toString("hex");
// }

// // Function to decrypt text
// function decrypt(text: string) {
//   const textParts = text.split(":");
//   const iv = Buffer.from(textParts.shift()!, "hex");
//   const encryptedText = Buffer.from(textParts.join(":"), "hex");
//   const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    // added
    const user = await clerkClient.users.getUser(userId);
    const email = user?.emailAddresses[0]?.emailAddress;

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    // Log the GET action
    await addUserLog(userId, "Get Tasks", `User ${userId} retrieved tasks.`, [
      { email:`${email}`, api: "/api/tasks", method: "GET" }
    ])

    return NextResponse.json(tasks);
    // return tasks;
  } catch (error) {
    // console.log("ERROR GETTING TASKS: ", error);
    logger.error("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);
    const email = user?.emailAddresses[0]?.emailAddress;

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

    // Encrypt the title and description before saving
    // const encryptedTitle = encrypt(title);
    // const encryptedDescription = encrypt(description);

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

     // Log the POST action
     await addUserLog(userId, "Create Task", `Task ${task.id} created by user ${userId}.`, [
      { email: `${email}`, api: "/api/tasks", method: "POST" },
    ]);
    logger.info(`Task created for user ${userId}: ${task.id}`)

    return NextResponse.json(task);
  } catch (error) {
    logger.error("ERROR CREATING TASK: ", error);
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

    const user = await clerkClient.users.getUser(userId);
    const email = user?.emailAddresses[0]?.emailAddress;

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    // Log the PUT action
    await addUserLog(userId, "Update Task", `Task ${id} updated by user ${userId}.`, [
      { email: `${email}`, api: "/api/tasks", method: "PUT" },
    ]);

    logger.info(`Task updated for user ${userId}: ${id}`);

    return NextResponse.json(task);
  } catch (error) {
    logger.error("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
