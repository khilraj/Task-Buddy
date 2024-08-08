"use server";

import User from "@/lib/models/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}

export async function addUserLog(clerkId: string, action: string) {
  try {
    await connect();
    const user = await User.findOne({ clerkId });
    if (user) {
      user.logs.push({ action });
      await user.save();
      return JSON.parse(JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
}