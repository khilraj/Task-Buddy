import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    //  // Decrypt the title and description for each task
    //  const decryptedTasks = tasks.map(task => ({
    //   ...task,
    //   title: decrypt(task.title),
    //   description: decrypt(task.description!),
    // }));

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
